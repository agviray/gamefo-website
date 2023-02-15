import React, { useEffect, useState } from 'react';
import { StyledBanner, StyledImageContainer } from './styles/Banner.styled';

// *** Scrolls HORIZONTALLY ***
const Banner = ({ images }) => {
  return (
    <StyledBanner>
      {images.map((image) => (
        <StyledImageContainer key={image.title}>
          {image.content()}
        </StyledImageContainer>
      ))}
    </StyledBanner>
  );
};

export default Banner;
