import React, { useRef, useEffect, useState } from 'react';
import {
  StyledBanner,
  StyledImageContainer,
  StyledImage,
} from './styles/Banner.styled';

// *** Scrolls HORIZONTALLY ***
const Banner = ({ images }) => {
  const initialSlides = [
    {
      content: () =>
        images.map((image) => (
          <StyledImageContainer key={image.title}>
            <StyledImage imgUrl={image.imageUrl}></StyledImage>
          </StyledImageContainer>
        )),
    },
  ];

  return (
    <StyledBanner>
      <div className="content">
        {initialSlides.map((slide) => slide.content())}
      </div>
    </StyledBanner>
  );
};

export default Banner;
