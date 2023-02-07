import React, { useState } from 'react';
import { StyledCarousel, StyledControls } from './styles/Carousel.styled';

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
        <StyledControls>
          <div className="content">
            <div className="control">
              <span className="prev"></span>
            </div>
            <div className="control">
              <span className="next"></span>
            </div>
          </div>
        </StyledControls>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
