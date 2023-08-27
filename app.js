import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [films, setFilms] = useState([]);

  const addFilm = (film) => {
    setFilms([...films, film]);
  };

  const filterFilms = (filters) => {
    // Implement filtering logic based on filters.title and filters.note
    // Update the films list accordingly
  };

  return (
    <div className="app">
      <h1>Liste de Films</h1>
      <Filter onFilter={filterFilms} />
      <MovieList films={films} />
      {/* Add a component to add new films */}
    </div>
  );
};

export default App;
