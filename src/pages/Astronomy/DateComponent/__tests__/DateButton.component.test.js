import React from 'react';
import { render } from '@testing-library/react';

// Components
import DateButtonComponent from '../DateButton.component';

// Hooks
import { useDataAstronomy } from '../../../../providers/DataAstronomy/DataAstronomy.provider';

jest.mock('../../../../providers/DataAstronomy/DataAstronomy.provider');

describe('DateButton Component', () => {
  it('Should show DateButton Component', () => {
    useDataAstronomy.mockReturnValue({
      searchDate: '2021-11-21',
      onChangeDate: jest.fn(),
    });
    const error = {
      code: 400,
      msg: 'Some text',
    };
    const container = render(<DateButtonComponent errorResponse={error} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
