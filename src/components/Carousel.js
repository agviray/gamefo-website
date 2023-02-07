import React, { useState } from 'react';
import {
  StyledCarousel,
  StyledControls,
  StyledIndicators,
  StyledThumbnails,
} from './styles/Carousel.styled';

const Carousel = ({ name, screenshots }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const updateActiveImageIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= screenshots.length) {
      newIndex = screenshots.length - 1;
    }
    setActiveImageIndex(newIndex);
  };

  return (
    <>
      <StyledCarousel>
        <div className="content">
          <div
            style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
            className="items"
          >
            {screenshots.map((img, index) => (
              <div key={img.id} className="imgContainer">
                <img src={img.image} alt={`${name} screenshot ${index}`} />
              </div>
            ))}
          </div>
          <StyledControls>
            <div className="content">
              <div
                className={`control ${activeImageIndex <= 0 ? 'disabled' : ''}`}
                onClick={() => updateActiveImageIndex(activeImageIndex - 1)}
              >
                <span className="prev"></span>
              </div>
              <div
                className={`control ${
                  activeImageIndex >= screenshots.length - 1 ? 'disabled' : ''
                }`}
                onClick={() => updateActiveImageIndex(activeImageIndex + 1)}
              >
                <span className="next"></span>
              </div>
            </div>
          </StyledControls>
          <StyledIndicators>
            <div className="content">
              <span className="current">{activeImageIndex + 1}</span>
              <span className="line">|</span>
              <span className="all">{screenshots.length}</span>
            </div>
          </StyledIndicators>
        </div>
      </StyledCarousel>
      <StyledThumbnails>
        {screenshots.map((img, index) => (
          <div
            key={index}
            className={activeImageIndex === index ? 'activeImage' : ''}
            onClick={() => updateActiveImageIndex(index)}
          >
            <img src={img.image} alt={`${name} thumbnail ${index}`} />
          </div>
        ))}
      </StyledThumbnails>
    </>
  );
};

export default Carousel;
