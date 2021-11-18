import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import HeaderComponent from '../../components/Layout/Header/Header.component';
import ContentComponent from '../../components/Layout/Content/Content.component';

import { useAuth } from '../../providers/Auth';

// Hooks
import useVideos from '../../hooks/useVideos';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [search, setSearch] = useState('');

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  const { videos, loading, error } = useVideos(search);

  return (
    <>
      <HeaderComponent onChangeInput={(event) => setSearch(event.target.value)} />
      <h1>Welcome to Challenge!</h1>
      <ContentComponent error={error} loading={loading} videos={videos} />
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
