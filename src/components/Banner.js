import React, { useEffect, useState } from 'react';
import { StyledBanner, StyledImageContainer } from './styles/Banner.styled';

// *** Scrolls HORIZONTALLY ***
const Banner = ({ images }) => {
  return (
    <StyledBanner>
      <div className="content">
        {images.map((image) => (
          <StyledImageContainer key={image.title}>
            {image.content()}
          </StyledImageContainer>
        ))}
      </div>
    </StyledBanner>
  );
};

export default Banner;
