import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './styles/PageNumbers.styled';

const PageNumbers = ({ responseData }) => {
  useEffect(() => {
    console.log(`PageNumbers says responseData is....
    ************************************************
    ************************************************
    `);
    console.log(responseData);
  }, []);

  return (
    <StyledContainer>
      <div className="contents">
        <span>Previous</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>Next</span>
      </div>
    </StyledContainer>
  );
};

export default PageNumbers;
