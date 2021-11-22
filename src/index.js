import React from 'react';
import ReactDOM from 'react-dom';

// Provider
import AuthProvider from './providers/Auth/Auth.provider';
import UserProvider from './providers/DataUser/DataUser.provider';

import App from './components/App';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
