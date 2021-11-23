import React from 'react';

// Components
import FavoritesComponent from '../../components/Layout/Favorites/Favorites.component';
import HeaderComponent from '../../components/Layout/Header/Header.component';

function FavoritesPage() {
  return (
    <>
      <HeaderComponent />
      <h1>Favorites!</h1>
      <FavoritesComponent />
    </>
  );
}

export default FavoritesPage;
