import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.urls.small} alt={photo.alt_description} />
      <p>
        <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer">{photo.user.name}</a>
      </p>
    </div>
  );
};

export default PhotoCard;