import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledContent } from './styles/SearchBar.styled';
import { ResponseContext } from './Layout';
import MagnifyingGlass from './MagnifyingGlass';

const initialSearchParameters = {
  term: '',
  page: null,
};

const SearchBar = () => {
  const [searchParameters, setSearchParameters] = useState(
    initialSearchParameters
  );
  const [inputHasFocus, setInputHasFocus] = useState(true);
  const inputRef = useRef(null);
  const formContentRef = useRef(null);
  const responseContextValue = useContext(ResponseContext);

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
    const term = searchParameters.term;
    const page = 1;
    responseContextValue.onResponseChange(term, page);
  };

  const onInputChange = (e) => {
    setSearchParameters({ ...searchParameters, term: e.target.value });
  };

  const setInputFocus = (e) => {
    const input = inputRef.current;
    if (e.target.contains(input)) {
      input.focus();
    }
  };

  return (
    <>
      <StyledContent inputHasFocus={inputHasFocus}>
        <form onSubmit={handleSubmit}>
          <div
            ref={formContentRef}
            className="formContent"
            onClick={(e) => setInputFocus(e)}
          >
            <label htmlFor="SearchInput">Search</label>
            <div className={'magnifyingGlassContainer'}>
              <MagnifyingGlass
                color={`${inputHasFocus ? '#0d48e4' : '#333333'}`}
              />
            </div>
            <input
              ref={inputRef}
              onChange={onInputChange}
              id="SearchInput"
              type="text"
              placeholder="Looking for something?"
              value={searchParameters.term}
              autoFocus
            />
          </div>
        </form>
      </StyledContent>
    </>
  );
};

export default SearchBar;
