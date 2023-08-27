import React from 'react';

const FilmCard = ({ title, description, posterURL, note }) => {
  return (
    <div className="film-card">
      <img src={posterURL} alt={`${title} Poster`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Note: {note}</p>
    </div>
  );
};

export default FilmCard;
