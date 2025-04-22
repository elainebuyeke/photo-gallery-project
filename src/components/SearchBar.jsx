import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search photos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;