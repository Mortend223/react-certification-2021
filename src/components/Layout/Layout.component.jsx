import React from 'react';
import PropTypes from 'prop-types';

// Components
import Modal from '../Modal/Modal';

// Context
import { useData } from '../../providers/DataGlobal/DataGlobal.provider';

import './Layout.styles.css';

function Layout({ children }) {
  const { isOpen, toggleModal } = useData();

  return (
    <main className="container">
      {children}
      <Modal open={isOpen} toggle={toggleModal} />
    </main>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
