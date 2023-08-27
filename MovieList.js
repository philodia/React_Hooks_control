import React from 'react';
import FilmCard from './FimCard';

const MovieList = ({ films }) => {
  return (
    <div className="movie-list">
      {films.map((film, index) => (
        <FilmCard key={index} {...film} />
      ))}
    </div>
  );
};

export default MovieList;
