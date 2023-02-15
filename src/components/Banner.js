import React from 'react';
import {
  StyledBanner,
  StyledImageContainer,
  StyledImage,
} from './styles/Banner.styled';

// *** Scrolls HORIZONTALLY ***
const Banner = ({ images }) => {
  return (
    <StyledBanner>
      <div className="content">
        {images.map((image) => (
          <StyledImageContainer key={image.title}>
            <StyledImage imgUrl={image.imageUrl}></StyledImage>
          </StyledImageContainer>
        ))}
      </div>
      <div className="content">
        {images.map((image) => (
          <StyledImageContainer key={image.title}>
            <StyledImage imgUrl={image.imageUrl}></StyledImage>
          </StyledImageContainer>
        ))}
      </div>
    </StyledBanner>
  );
};

export default Banner;
