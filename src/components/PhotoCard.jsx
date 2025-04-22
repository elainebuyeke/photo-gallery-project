import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.urls.small} alt={photo.alt_description} />
     
    </div>
  );
};

export default PhotoCard;