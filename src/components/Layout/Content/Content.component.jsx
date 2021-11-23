import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentWrapper, LinkWrapper } from './Content.styles';

// Components
import VideoComponent from '../Video/Video.component';

// Hooks
import useVideos from '../../../hooks/useVideos';

// Providers
import { useAuth } from '../../../providers/Auth/Auth.provider';
import { useData } from '../../../providers/DataGlobal/DataGlobal.provider';
import { useUserContext } from '../../../providers/DataUser/DataUser.provider';

function ContentComponent() {
  const { search } = useData();
  const { addFavoriteVideo, isFavoriteVideo, removeFavoriteVideo } = useUserContext();
  const { authenticated } = useAuth();
  const { videos, loading, error } = useVideos(search);

  return (
    <ContentWrapper>
      {(!loading || !error) &&
        videos.map((item) => (
          <LinkWrapper key={item.id}>
            <Link to={`/${item.id}`}>
              <VideoComponent
                description={item.description}
                title={item.title}
                url={item.thumbnailUrl}
              />
            </Link>
            {authenticated &&
              (isFavoriteVideo(item) ? (
                <FontAwesomeIcon
                  icon={faStar}
                  size="2x"
                  // style={{ color: 'white', cursor: 'pointer' }}
                  title="add-favorite"
                  onClick={() => addFavoriteVideo(item)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faStar}
                  size="2x"
                  style={{ color: 'yellow', cursor: 'pointer' }}
                  title="remove-favorite"
                  onClick={() => removeFavoriteVideo(item)}
                />
              ))}
          </LinkWrapper>
        ))}
    </ContentWrapper>
  );
}

export default ContentComponent;
