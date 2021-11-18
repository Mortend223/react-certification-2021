import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Description, FullVideo, Iframe } from './Video.styles';

const VideoFullComponent = ({ description, title, url }) => (
  <FullVideo>
    <Iframe
      id="player"
      type="text/html"
      src={`http://www.youtube.com/embed/${url}?enablejsapi=1&origin=http://example.com`}
      title={title}
    />
    <Description>
      <h3>{title}</h3>
      <div>{description}</div>
    </Description>
  </FullVideo>
);

VideoFullComponent.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default VideoFullComponent;
