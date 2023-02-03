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
    responseContextValue.onResponseDataChange(term, page);
  };

  const onInputChange = (e) => {
    setSearchParameters({ ...searchParameters, term: e.target.value });
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
