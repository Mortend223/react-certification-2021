import React, { createContext, useEffect, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import loginApi from './loginApi';

import storage from '../../utils/storage';

const AuthContext = createContext(null);
const AuthStorageKey = 'REACT-CHALLENGE-AUTH';

const initialState = {
  loading: false,
  user: null,
  error: false,
};

function AuthReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case 'onLogin':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'onLoginSuccess':
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case 'onLoginError':
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case 'onLoginOut':
      return {
        ...initialState,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    ...initialState,
    user: storage.get(AuthStorageKey) ? JSON.parse(storage.get(AuthStorageKey)) : null,
  });

  const loginAction = () => async (username, password) => {
    dispatch({ type: 'onLogin' });

    try {
      const user = await loginApi(username, password);

      dispatch({
        type: 'onLoginSuccess',
        payload: { user },
      });
      return user;
    } catch (error) {
      dispatch({
        type: 'onLoginError',
        payload: { error: error.message },
      });
      return null;
    }
  };

  const logoutAction = () => () => {
    dispatch({ type: 'onLoginOut' });
  };

  const value = {
    ...state,
    authenticated: Boolean(state.user),
    login: loginAction(dispatch),
    logout: logoutAction(dispatch),
  };

  useEffect(() => {
    if (state.user) {
      storage.set(AuthStorageKey, JSON.stringify(state.user));
    } else {
      storage.remove(AuthStorageKey);
    }
  }, [state.user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useAuth };
export default AuthProvider;
