import React, { useState, useEffect, useRef } from 'react';
import SearchResults from './SearchResults';
import { StyledContent } from './styles/SearchBar.styled';
import MagnifyingGlass from './MagnifyingGlass';

const SearchBar = ({ results, onResultsChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputHasFocus, setInputHasFocus] = useState(true);
  const inputRef = useRef(null);
  const formContentRef = useRef(null);

  useEffect(() => {
    const onBodyClick = () => {
      return document.activeElement === inputRef.current
        ? setInputHasFocus(true)
        : setInputHasFocus(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  useEffect(() => {
    console.log(inputHasFocus);
  }, [inputHasFocus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onResultsChange(searchTerm);
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <StyledContent inputHasFocus={inputHasFocus}>
        <form onSubmit={handleSubmit}>
          <div ref={formContentRef} className="formContent">
            <label htmlFor="SearchInput">Search</label>
            <div className={'magnifyingGlassContainer'}>
              <MagnifyingGlass color={`${inputHasFocus ? 'red' : '#333333'}`} />
            </div>
            <input
              ref={inputRef}
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
