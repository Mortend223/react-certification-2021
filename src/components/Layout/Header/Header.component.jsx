import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Styles
import {
  faBars,
  faToggleOff,
  faSearch as searchIcon,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ButtonToggle,
  HeaderWrapper,
  Input,
  LogoLink,
  MenuToggle,
  SearchBox,
} from './Header.styles';
import SessionOutLogo from '../../../resources/session_out.png';

// Context
import { useData } from '../../../context/data-context';

function HeaderComponent() {
  const { push } = useHistory();
  const location = useLocation();
  const { isDark, onChangeInput } = useData();
  const [searchTerm, setSearch] = useState('');

  const handleChange = () => {
    onChangeInput({ type: 'updateTheme' });
  };

  const handleSearchChanged = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onChangeInput({ term: searchTerm, type: 'updateSearch' });

      if (location.pathname !== '/') {
        push('/');
      }
    }
  };

  return (
    <HeaderWrapper isDark={isDark}>
      <SearchBox>
        <Input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearchChanged}
          onKeyDown={handleKeyDown}
          placeholder="Wizeline"
        />
        <FontAwesomeIcon
          icon={searchIcon}
          size="1x"
          style={{ color: 'gray' }}
          title="search-input"
        />
      </SearchBox>
      <ButtonToggle onClick={handleChange} name="darkMode">
        <FontAwesomeIcon
          icon={isDark ? faToggleOff : faToggleOn}
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

export default HeaderComponent;
