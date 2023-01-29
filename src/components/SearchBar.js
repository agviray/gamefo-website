import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { StyledContent } from './styles/SearchBar.styled';
import magnifyingGlass from '../assets/magnifying-glass.svg';

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
    <>
      <StyledContent>
        <form onSubmit={handleSubmit}>
          <div className="formContent">
            <label htmlFor="SearchInput">Search</label>
            <img src={magnifyingGlass} alt="magnifying glass" />
            <input
              onChange={onInputChange}
              id="SearchInput"
              type="text"
              placeholder="Looking for something?"
              value={searchTerm}
              autoFocus
            />
          </div>
        </form>
        <SearchResults results={results} />
      </StyledContent>
    </>
  );
};

export default SearchBar;
