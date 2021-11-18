import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { BlockElementRelated, Description, VideoThumbnailSmall } from './Video.styles';

const VideoRelated = ({ title, url }) => (
  <BlockElementRelated>
    <VideoThumbnailSmall src={url} title={title} />
    <Description>
      <h3>{title}</h3>
    </Description>
  </BlockElementRelated>
);

VideoRelated.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default VideoRelated;
