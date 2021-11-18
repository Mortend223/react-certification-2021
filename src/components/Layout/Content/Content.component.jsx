import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import VideoComponent from '../Video/Video.component';

// Styles
import ContentWrapper from './Content.styles';

function ContentComponent({ videos }) {
  return (
    <ContentWrapper>
      {videos.map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <VideoComponent
            description={item.description}
            title={item.title}
            url={item.thumbnailUrl}
          />
        </Link>
      ))}
    </ContentWrapper>
  );
}

ContentComponent.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContentComponent;
