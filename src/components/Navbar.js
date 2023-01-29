import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavContent } from './styles/Navbar.styled';
import magnifyingGlass from '../assets/magnifying-glass.svg';

const Navbar = () => {
  return (
    <nav>
      <StyledNavContent>
        <div className="headingBlock">
          <Link to="/">
            <h1>
              <span>Game-Fo</span>
            </h1>
          </Link>
        </div>
        <div className="searchBlock">
          <Link to="/search">
            <div>
              <img src={magnifyingGlass} alt="magnifying glass" />
              <span>Looking for something?</span>
            </div>
          </Link>
        </div>
      </StyledNavContent>
    </nav>
  );
};

export default Navbar;
