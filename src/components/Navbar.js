import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  StyledWrapper,
  StyledNavContent,
  StyledErrorMessage,
} from './styles/Navbar.styled';
import SearchBar from './SearchBar';
import MagnifyingGlass from './MagnifyingGlass';

const Navbar = () => {
  const [isInputActive, setIsInputActive] = useState(true);
  const [isTermValid, setIsTermValid] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/search') {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [pathname]);

  const updateIsInputActive = (status) => {
    setIsInputActive(status);
  };

  const updateIsTermValid = (status) => {
    setIsTermValid(status);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <nav>
          <StyledNavContent isInputActive={isInputActive}>
            <div className={`headingBlock ${isInputActive ? 'active' : ''}`}>
              <Link to="/">
                <h1>
                  <span>Game-Fo</span>
                </h1>
              </Link>
            </div>
            {isHidden ? (
              <div className={`searchBlock ${isInputActive ? 'active' : ''}`}>
                <SearchBar
                  isTermValid={isTermValid}
                  onIsTermValidChange={updateIsTermValid}
                  onIsInputActiveChange={updateIsInputActive}
                />
                {isTermValid ? null : (
                  <StyledErrorMessage>
                    Enter a valid video game title
                  </StyledErrorMessage>
                )}
              </div>
            ) : (
              <div className="searchBlock">
                <Link to="/search">
                  <div className={'searchBlockContent'}>
                    <div className={'magnifyingGlassContainer'}>
                      <MagnifyingGlass />
                    </div>
                    <span>Looking for something?</span>
                  </div>
                </Link>
              </div>
            )}
          </StyledNavContent>
        </nav>
      </div>
    </StyledWrapper>
  );
};

export default Navbar;
