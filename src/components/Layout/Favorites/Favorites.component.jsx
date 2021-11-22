import React from 'react';

import { useUserContext } from '../../../providers/DataUser/DataUser.provider';

const Favorites = () => {
  const { favoriteVideos } = useUserContext();

  //   const getVideoPath = (video) => `/favorites/${video.id}`;

  if (favoriteVideos.length === 0) {
    return <p>You haven&apos;t added any video to your favorites yet</p>;
  }
  return <>Hi</>;
  //   return <VideoCardList videos={favoriteVideos} getVideoPath={getVideoPath} />;
};

export default Favorites;
