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
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/search') {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [pathname]);

  const updateIsInputEmpty = (status) => {
    setIsInputEmpty(status);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <nav>
          <StyledNavContent>
            <div className="headingBlock">
              <Link to="/">
                <h1>
                  <span>Game-Fo</span>
                </h1>
              </Link>
            </div>
            {isHidden ? (
              <div className="searchBlock">
                <SearchBar
                  isInputEmpty={isInputEmpty}
                  onIsInputEmptyChange={updateIsInputEmpty}
                />
                {isInputEmpty ? (
                  <StyledErrorMessage>
                    Enter a valid video game title
                  </StyledErrorMessage>
                ) : null}
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
