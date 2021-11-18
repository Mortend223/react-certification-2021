import React from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce/lib';

// Styles
import { faBars, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ButtonToggle,
  HeaderWrapper,
  Input,
  LogoLink,
  MenuToggle,
} from './Header.styles';
import SessionOutLogo from '../../../resources/session_out.png';

function HeaderComponent({ onChangeInput }) {
  const onChangeDebounced = useDebouncedCallback(onChangeInput, 1000);

  return (
    <HeaderWrapper>
      <Input
        type="text"
        name="search"
        onChange={onChangeDebounced}
        placeholder="Wizeline"
      />
      <ButtonToggle>
        <FontAwesomeIcon
          icon={faToggleOff}
          size="6x"
          style={{ color: 'white' }}
          title="toggle-button"
        />
      </ButtonToggle>
      <p>Dark Mode</p>
      <LogoLink href="#">
        <img src={SessionOutLogo} alt="Logo" />
      </LogoLink>
      <MenuToggle href="#">
        <FontAwesomeIcon
          icon={faBars}
          size="6x"
          style={{ color: 'white' }}
          title="menu-toggle"
        />
      </MenuToggle>
    </HeaderWrapper>
  );
}

HeaderComponent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};

export default HeaderComponent;
