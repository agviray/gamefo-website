import React, { useState } from 'react';
import { StyledCarousel } from './styles/Carousel.styled';

const Carousel = ({ name, screenshots }) => {
  return (
    <StyledCarousel>
      <div className="content">
        <div className="items">
          {screenshots.map((img, index) => (
            <div key={img.id} className="imgContainer">
              <img src={img.image} alt={`${name} screenshot ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
