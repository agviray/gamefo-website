import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledContent } from './styles/SearchBar.styled';
import { ResponseContext } from './Layout';
import MagnifyingGlass from './MagnifyingGlass';
import useScrollYPosition from './hooks/useScrollYPosition';

const initialSearchParameters = {
  term: '',
  page: null,
};

const SearchBar = ({
  isTermValid,
  onIsTermValidChange,
  onIsInputActiveChange,
}) => {
  const [searchParameters, setSearchParameters] = useState(
    initialSearchParameters
  );
  const [inputHasFocus, setInputHasFocus] = useState(true);
  const inputRef = useRef(null);
  const formContentRef = useRef(null);
  const buttonRef = useRef(null);
  const responseContextValue = useContext(ResponseContext);
  const scrollYPosition = useScrollYPosition();

  useEffect(() => {
    const onBodyClick = () => {
      if (
        document.activeElement === inputRef.current ||
        document.activeElement === buttonRef.current
      ) {
        setInputHasFocus(true);
      } else {
        setInputHasFocus(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  useEffect(() => {
    if (inputHasFocus) {
      onIsInputActiveChange(true);
    } else if (!inputHasFocus) {
      onIsInputActiveChange(false);
    }
  }, [inputHasFocus]);

  useEffect(() => {
    if (isTermValid === false) {
      onIsTermValidChange(true);
    } else if (isTermValid === true) {
      return;
    }
  }, [searchParameters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = searchParameters.term;
    const page = 1;

    if (searchParameters.term === '') {
      onIsTermValidChange(false);
    } else {
      if (scrollYPosition > 0) {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
      responseContextValue.onIsResponsePendingChange(true);
      responseContextValue.onResponseChange(term, page, []);
    }
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
            {inputHasFocus ? (
              <span className="button">
                <input
                  ref={buttonRef}
                  type="submit"
                  value="Search"
                  onClick={handleSubmit}
                />
              </span>
            ) : null}
          </div>
        </form>
      </StyledContent>
    </>
  );
};

export default SearchBar;
