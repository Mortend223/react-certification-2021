import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import ContentComponent from '../../components/Layout/Content/Content.component';
import HeaderComponent from '../../components/Layout/Header/Header.component';

// Providers
import { useAuth } from '../../providers/Auth';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  return (
    <>
      <HeaderComponent />
      <h1>Welcome to Challenge!</h1>
      <ContentComponent />
      <section className="homepage" ref={sectionRef}>
        <h1>Hello stranger!</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <Link to="/login">let me in →</Link>
        )}
      </section>
    </>
  );
}

export default HomePage;
