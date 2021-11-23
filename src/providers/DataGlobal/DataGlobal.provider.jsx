import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Providers
import { useAuth } from '../Auth/Auth.provider';
import { useUserContext } from '../DataUser/DataUser.provider';

const DataContext = createContext(null);

function DataReducer(state, action) {
  switch (action.type) {
    case 'updateSearch': {
      return { ...state, search: action.term };
    }
    case 'toggleModal': {
      return { ...state, isOpen: !state.isOpen };
    }
    case 'updateTheme': {
      return { ...state, isDark: !state.isDark };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const { authenticated } = useAuth();
  const { isDarkTheme, setTheme } = useUserContext();
  const [state, dispatch] = useReducer(DataReducer, {
    favoriteVideos: [],
    isDark: authenticated ? isDarkTheme : true,
    isOpen: false,
    search: 'Wizeline',
  });

  const onChangeInput = (value) => {
    dispatch({ type: 'updateSearch', term: value });
  };
  const toggleModal = () => {
    dispatch({ type: 'toggleModal' });
  };
  const toggleTheme = () => {
    if (authenticated) {
      setTheme(state.isDark);
    }
    dispatch({ type: 'updateTheme' });
  };

  return (
    <DataContext.Provider
      value={{
        search: state.search,
        isDark: state.isDark,
        isOpen: state.isOpen,
        onChangeInput,
        toggleModal,
        toggleTheme,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useData };
export default DataProvider;
