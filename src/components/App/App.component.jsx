import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import VideoDetailPage from '../../pages/VideoDetail/VideoDetail.page';
import random from '../../utils/fns';

// Components
import Favorites from '../Layout/Favorites/Favorites.component';

// Provider
import DataProvider from '../../providers/DataGlobal/DataGlobal.provider';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  // const ProtectedRoute = ({ component, path }) => {
  //   const { authenticated } = useAuth();
  //   return authenticated ? (
  //     <Route path={path} exact>
  //       {component}
  //     </Route>
  //   ) : null;
  // };

  return (
    <BrowserRouter>
      <DataProvider>
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
            {/* <ProtectedRoute component={Favorites} path="/favorites" exact /> */}
            <Route path="/:id">
              <VideoDetailPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  );
}
// ProtectedRoute.propTypes = {
//   component: PropTypes.node.isRequired,
//   path: PropTypes.string.isRequired,
// };

export default App;
