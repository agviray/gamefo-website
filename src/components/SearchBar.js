import React, { useState, useEffect, useRef } from 'react';
import { StyledContent } from './styles/SearchBar.styled';
import MagnifyingGlass from './MagnifyingGlass';

const SearchBar = ({ onResponseDataChange }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onResponseDataChange({ search: searchTerm });
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
      </StyledContent>
    </>
  );
};

export default SearchBar;
