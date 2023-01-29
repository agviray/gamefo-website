import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledNavContent } from './styles/Navbar.styled';
import MagnifyingGlass from './MagnifyingGlass';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/search') {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [pathname]);

  return (
    <nav>
      <StyledNavContent isHidden={isHidden}>
        <div className="headingBlock">
          <Link to="/">
            <h1>
              <span>Game-Fo</span>
            </h1>
          </Link>
        </div>
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
      </StyledNavContent>
    </nav>
  );
};

export default Navbar;
