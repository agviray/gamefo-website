import React, { useState, useEffect } from 'react';
import { StyledSquares, StyledLoader } from './styles/Loader.styled';

const Loader = ({ status }) => {
  const [isActive, setIsActive] = useState(status);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    }

    if (!isActive) {
      document.body.style.overflow = 'visible';
    }
  }, [isActive]);

  return isActive ? (
    <StyledLoader>
      <StyledSquares>
        <span className="first"></span>
        <span className="second"></span>
        <span className="fourth"></span>
        <span className="third"></span>
      </StyledSquares>
      <span>Loading..</span>
    </StyledLoader>
  ) : null;
};

export default Loader;
