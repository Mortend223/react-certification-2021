import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import storage from '../../utils/storage';
import { useAuth } from '../Auth';

const UserContext = createContext(null);
const UserStorageKey = 'REACT-CHALLENGE-USER-DATA';

const initialState = {
  favoriteVideos: [],
  isDarkTheme: true,
};

function getUserStorageKey(user) {
  return user ? `${UserStorageKey}-${user.id}` : '';
}

function UserReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case 'addFavoriteVideo':
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, payload.video],
      };
    case 'removeFavoriteVideo':
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter(
          (video) => video.id !== payload.video.id
        ),
      };
    case 'setTheme':
      return {
        ...state,
        isDarkTheme: payload,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}

function UserProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(UserReducer, {
    ...initialState,
    ...(storage.get(getUserStorageKey(user))
      ? JSON.parse(storage.get(getUserStorageKey(user)))
      : {}),
  });

  const isFavoriteVideo = (video) => {
    return state.favoriteVideos.find((favoriteVideo) => favoriteVideo.id === video.id);
  };

  const addFavoriteVideo = () => (video) => {
    dispatch({
      type: 'addFavoriteVideo',
      payload: { video },
    });
  };

  const removeFavoriteVideo = () => (video) => {
    dispatch({
      type: 'removeFavoriteVideo',
      payload: { video },
    });
  };

  const setTheme = () => (isDarkTheme) => {
    dispatch({
      type: 'setTheme',
      payload: !isDarkTheme,
    });
  };

  const value = {
    ...state,
    isFavoriteVideo,
    addFavoriteVideo: addFavoriteVideo(dispatch),
    removeFavoriteVideo: removeFavoriteVideo(dispatch),
    setTheme: setTheme(dispatch),
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    storage.set(
      getUserStorageKey(user),
      JSON.stringify({
        favoriteVideos: state.favoriteVideos,
        isDarkTheme: state.isDarkTheme,
      })
    );
  }, [state.favoriteVideos, user, state.isDarkTheme]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useUserContext };
export default UserProvider;
