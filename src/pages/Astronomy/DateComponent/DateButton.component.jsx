import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

// Vendors
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Hooks
import { useDataAstronomy } from '../../../providers/DataAstronomy/DataAstronomy.provider';

// Styles
import { Button, DateContainer, ErrorMessage, SubTitle } from '../Astronomy.styles';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <Button onClick={onClick} ref={ref}>
    {value}
  </Button>
));

function DateButtonComponent({ errorResponse }) {
  const [startDate, setStartDate] = useState(new Date());
  const { onChangeDate } = useDataAstronomy(startDate);

  const handleChange = (selectedDate) => {
    setStartDate(selectedDate);
    onChangeDate(selectedDate);
  };

  return (
    <DateContainer>
      <SubTitle>Choose a date: </SubTitle>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        customInput={<CustomInput />}
      />
      {errorResponse.code === 400 && <ErrorMessage>{errorResponse.msg}</ErrorMessage>}
    </DateContainer>
  );
}

DateButtonComponent.propTypes = {
  errorResponse: PropTypes.shape({
    code: PropTypes.number.isRequired,
    msg: PropTypes.string.isRequired,
  }).isRequired,
};

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
CustomInput.defaultProps = {
  value: '',
  onClick: () => {},
};

export default DateButtonComponent;
