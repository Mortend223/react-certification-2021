import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import VideoDetailPage from '../../pages/VideoDetail/VideoDetail.page';
import AstronomyPage from '../../pages/Astronomy/Astronomy.page';
import FavoritesPage from '../../pages/Favorites/Favorites.page';

// Provider
import DataProvider from '../../providers/DataGlobal/DataGlobal.provider';
import DataAstronomyProvider from '../../providers/DataAstronomy/DataAstronomy.provider';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <DataAstronomyProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Private exact path="/favorites/:id">
                <VideoDetailPage />
              </Private>
              <Route exact path="/apod">
                <AstronomyPage />
              </Route>
              <Route path="/:id">
                <VideoDetailPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </DataAstronomyProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
