import React, { useState, useEffect } from 'react';
import { StyledSquares, StyledLoader } from './styles/Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <StyledSquares>
        <span className="first"></span>
        <span className="second"></span>
        <span className="fourth"></span>
        <span className="third"></span>
      </StyledSquares>
    </StyledLoader>
  );
};

export default Loader;
