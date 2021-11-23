import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Styles
import {
  faBars,
  faToggleOff,
  faSearch as searchIcon,
  faToggleOn,
  faUserSecret,
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

// Providers
import { useAuth } from '../../../providers/Auth/Auth.provider';
import { useData } from '../../../providers/DataGlobal/DataGlobal.provider';

function HeaderComponent() {
  const { push } = useHistory();
  const location = useLocation();
  const { authenticated, logout, user } = useAuth();
  const { isDark, onChangeInput, toggleModal, toggleTheme } = useData();
  const [searchTerm, setSearch] = useState('');

  const handleSearchChanged = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onChangeInput(searchTerm);

      if (location.pathname !== '/') {
        push('/');
      }
    }
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    toggleTheme(true);
    logout();
    push('/');
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
      <ButtonToggle onClick={toggleTheme} name="darkMode">
        <FontAwesomeIcon
          icon={isDark ? faToggleOff : faToggleOn}
          size="6x"
          style={{ color: 'white' }}
          title="toggle-button"
        />
      </ButtonToggle>
      <p>{isDark ? 'Light Mode' : 'Dark Mode'}</p>
      <LogoLink href="#" onClick={authenticated ? deAuthenticate : toggleModal}>
        {authenticated ? (
          <img src={user.avatarUrl} alt="Wizeline" />
        ) : (
          <FontAwesomeIcon
            icon={faUserSecret}
            size="2x"
            style={{ color: 'white' }}
            title="toggle-button"
          />
        )}
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
