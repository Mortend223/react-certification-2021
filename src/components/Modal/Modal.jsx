import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Background,
  Button,
  CloseButton,
  ErrorMessage,
  ModalCard,
  ModalWrapper,
} from './Modal.styles';

// Providers
import { useAuth } from '../../providers/Auth';

const Portal = ({ children, el = 'div' }) => {
  const modalRoot = document.getElementById('modal');
  const [container] = React.useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    modalRoot.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};
function Modal({ toggle, open }) {
  const { login, loading, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = await login(username, password);

    if (user) {
      toggle();
    }
  };

  return (
    <Portal>
      {open && (
        <ModalWrapper>
          <ModalCard>
            <CloseButton onClick={toggle}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="2x"
                style={{ color: 'black' }}
                title="close-button"
              />
            </CloseButton>
            <section className="login">
              <h1>Welcome back!</h1>
              {error && (
                <ErrorMessage class="error-msg">
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="1x"
                    style={{ color: 'red' }}
                    title="error-message"
                  />
                  {error}
                </ErrorMessage>
              )}
              <div className="form-group">
                <label htmlFor="username">
                  <strong>username </strong>
                  <input
                    required
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <strong>password </strong>
                  <input
                    required
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <Button type="button" onClick={toggle} disabled={loading}>
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleLogin}
                color="primary"
                disabled={loading}
              >
                {loading ? 'Login in...' : 'Login'}
              </Button>
            </section>
          </ModalCard>
          <Background onClick={toggle} />
        </ModalWrapper>
      )}
    </Portal>
  );
}
export default Modal;
Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
