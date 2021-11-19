import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const themes = {
  light: {
    background: '#eeeeee',
  },
  dark: {
    background: '#222222',
  },
};
const DataContext = createContext(null);

function dataReducer(state, action) {
  switch (action.type) {
    case 'updateSearch': {
      return { search: action.term };
    }
    case 'updateTheme': {
      return { isDark: !state.isDark };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    search: 'Wizeline',
    isDark: true,
  });
  return (
    <DataContext.Provider
      value={{ search: state.search, isDark: state.isDark, onChangeInput: dispatch }}
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
