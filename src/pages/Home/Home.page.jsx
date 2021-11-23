import React from 'react';

// Components
import ContentComponent from '../../components/Layout/Content/Content.component';
import HeaderComponent from '../../components/Layout/Header/Header.component';

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <h1>Welcome!</h1>
      <ContentComponent />
    </>
  );
}

export default HomePage;
