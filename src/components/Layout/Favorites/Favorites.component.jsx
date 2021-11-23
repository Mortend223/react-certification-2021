import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { ContentWrapper, LinkWrapper } from '../Content/Content.styles';

// Components
import VideoComponent from '../Video/Video.component';

// Providers
import { useUserContext } from '../../../providers/DataUser/DataUser.provider';

function FavoritesComponent() {
  const { favoriteVideos } = useUserContext();

  if (favoriteVideos.length === 0) {
    return <p>Add some videos to favorites</p>;
  }
  return (
    <ContentWrapper>
      {favoriteVideos.map((item) => (
        <LinkWrapper key={item.id}>
          <Link to={`/favorites/${item.id}`}>
            <VideoComponent
              description={item.description}
              title={item.title}
              url={item.thumbnailUrl}
            />
          </Link>
        </LinkWrapper>
      ))}
    </ContentWrapper>
  );
}

export default FavoritesComponent;
