import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';

// Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Background, CloseButton, ModalCard, ModalWrapper } from './Modal.styles';

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
  const { login } = useAuth();
  const history = useHistory();

  const authenticate = (event) => {
    event.preventDefault();
    login();
    history.push('/secret');
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
              <form onSubmit={authenticate} className="login-form">
                <div className="form-group">
                  <label htmlFor="username">
                    <strong>username </strong>
                    <input required type="text" id="username" />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <strong>password </strong>
                    <input required type="password" id="password" />
                  </label>
                </div>
                <button type="submit">login</button>
              </form>
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
  // children: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
