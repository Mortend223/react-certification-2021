import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { BlockElement, Description, VideoThumbnail } from './Video.styles';

const VideoComponent = ({ description, title, url }) => (
  <BlockElement>
    <VideoThumbnail src={url} title={title} />
    <Description>
      <h3>{title}</h3>
      <div>{description}</div>
    </Description>
  </BlockElement>
);

VideoComponent.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

VideoComponent.defaultProps = {
  description: '',
  title: '',
  url: '',
};
export default VideoComponent;
