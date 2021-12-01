import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const DataAstromyContext = createContext(null);

function DataAstronomyReducer(state, action) {
  switch (action.type) {
    case 'updateDate': {
      return { ...state, searchDate: action.date };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataAstronomyProvider({ children }) {
  const [state, dispatch] = useReducer(DataAstronomyReducer, {
    searchDate: new Date(),
  });

  const onChangeDate = (value) => {
    dispatch({ type: 'updateDate', date: value });
  };

  useEffect(() => {}, [state.searchDate]);

  return (
    <DataAstromyContext.Provider
      value={{
        searchDate: state.searchDate,
        onChangeDate,
      }}
    >
      {children}
    </DataAstromyContext.Provider>
  );
}

function useDataAstronomy() {
  const context = useContext(DataAstromyContext);
  if (context === undefined) {
    throw new Error('useDataAstronomy must be used within a DataAstronomyProvider');
  }
  return context;
}

DataAstronomyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useDataAstronomy };
export default DataAstronomyProvider;
