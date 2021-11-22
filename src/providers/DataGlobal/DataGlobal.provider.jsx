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
    case 'addFavoriteVideo':
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, action.payload.video],
      };
    case 'removeFavoriteVideo':
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter(
          (video) => video.id !== action.payload.video.id
        ),
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, {
    favoriteVideos: [],
    isDark: true,
    isOpen: true,
    search: 'Wizeline',
  });

  const onChangeInput = (value) => {
    dispatch({ type: 'updateSearch', term: value });
  };
  const toggleModal = () => {
    dispatch({ type: 'toggleModal' });
  };
  const toggleTheme = () => {
    dispatch({ type: 'updateTheme' });
  };
  const addFavoriteVideo = () => async (video) => {
    dispatch({
      type: 'addFavoriteVideo',
      payload: { video },
    });
  };
  const removeFavoriteVideo = () => async (video) => {
    dispatch({
      type: 'removeFavoriteVideo',
      payload: { video },
    });
  };

  return (
    <DataContext.Provider
      value={{
        search: state.search,
        isDark: state.isDark,
        isOpen: state.isOpen,
        addFavoriteVideo,
        removeFavoriteVideo,
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
