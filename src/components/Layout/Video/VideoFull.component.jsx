import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, FullVideo, Iframe } from './Video.styles';

// Providers
import { useAuth } from '../../../providers/Auth/Auth.provider';
import { useUserContext } from '../../../providers/DataUser/DataUser.provider';

function VideoFullComponent({ description, title, url, video }) {
  const { addFavoriteVideo, isFavoriteVideo, removeFavoriteVideo } = useUserContext();
  const { authenticated } = useAuth();

  return (
    <FullVideo>
      <Iframe
        id="player"
        type="text/html"
        src={`http://www.youtube.com/embed/${url}?enablejsapi=1&origin=http://example.com`}
        title={title}
      />
      <Description>
        <h3>
          {title}
          {authenticated &&
            (isFavoriteVideo(video) ? (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                style={{ color: 'yellow', cursor: 'pointer' }}
                title="remove-favorite"
                onClick={() => removeFavoriteVideo(video)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                style={{ color: 'grey', cursor: 'pointer' }}
                title="add-favorite"
                onClick={() => addFavoriteVideo(video)}
              />
            ))}
        </h3>
        <div>{description}</div>
      </Description>
    </FullVideo>
  );
}

VideoFullComponent.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  video: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default VideoFullComponent;
