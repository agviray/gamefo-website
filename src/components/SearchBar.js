import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

const SearchBar = ({ results, onResultsChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onResultsChange(searchTerm);
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="SearchInput">Search</label>
          <input
            onChange={onInputChange}
            id="SearchInput"
            type="text"
            placeholder="Search something"
            value={searchTerm}
          />
        </form>
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default SearchBar;
