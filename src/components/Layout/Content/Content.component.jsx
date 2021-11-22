import React from 'react';
import { Link } from 'react-router-dom';

// Components
import VideoComponent from '../Video/Video.component';

// Hooks
import useVideos from '../../../hooks/useVideos';

// Styles
import ContentWrapper from './Content.styles';
import { useData } from '../../../providers/DataGlobal/DataGlobal.provider';

function ContentComponent() {
  const { search } = useData();
  const { videos, loading, error } = useVideos(search);

  return (
    <ContentWrapper>
      {(!loading || !error) &&
        videos.map((item) => (
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

export default ContentComponent;
