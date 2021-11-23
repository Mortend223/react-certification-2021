import React from 'react';
import PropTypes from 'prop-types';

// Components
import Modal from '../Modal/Modal';

// Providers
import { useData } from '../../providers/DataGlobal/DataGlobal.provider';

import MainContainer from './Layout.styles';

function Layout({ children }) {
  const { isDark, isOpen, toggleModal } = useData();

  return (
    <MainContainer isDark={isDark}>
      {children}
      <Modal open={isOpen} toggle={toggleModal} />
    </MainContainer>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
