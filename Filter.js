import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [noteFilter, setNoteFilter] = useState('');

  const handleFilter = () => {
    onFilter({ title: titleFilter, note: noteFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Titre du film"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note minimale"
        value={noteFilter}
        onChange={(e) => setNoteFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filtrer</button>
    </div>
  );
};

export default Filter;
