import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  StyledCarousel,
  StyledSwiperOverlay,
  StyledControls,
  StyledIndicators,
  StyledThumbnails,
} from './styles/Carousel.styled';
import swipeIcon from '../images/swipe-icon.svg';

const Carousel = ({ name, screenshots }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const swipedHandlers = useSwipeable({
    onSwipedLeft: () => updateActiveImageIndex(activeImageIndex + 1),
    onSwipedRight: () => updateActiveImageIndex(activeImageIndex - 1),
  });

  const updateActiveImageIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= screenshots.length) {
      newIndex = screenshots.length - 1;
    }

    if (isOverlayActive === true) {
      setIsOverlayActive(false);
    }
    setActiveImageIndex(newIndex);
  };

  return (
    <>
      <StyledCarousel>
        <div className="content">
          {isOverlayActive ? (
            <StyledSwiperOverlay onClick={() => setIsOverlayActive(false)}>
              <div>
                <img src={swipeIcon} alt="swipe icon" />
                <span>Got it</span>
              </div>
            </StyledSwiperOverlay>
          ) : null}
          <div className="prevArrowContainer">
            <div
              className={`box ${activeImageIndex <= 0 ? 'disabled' : ''}`}
              onClick={() => updateActiveImageIndex(activeImageIndex - 1)}
            >
              <div className="prev"></div>
            </div>
          </div>
          <div
            {...swipedHandlers}
            style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
            className="items"
          >
            {screenshots.map((img, index) => (
              <div key={img.id} className="imgContainer">
                <img src={img.image} alt={`${name} screenshot ${index}`} />
              </div>
            ))}
          </div>
          <div className="nextArrowContainer">
            <div
              className={`box ${
                activeImageIndex >= screenshots.length - 1 ? 'disabled' : ''
              }`}
              onClick={() => updateActiveImageIndex(activeImageIndex + 1)}
            >
              <div className="next"></div>
            </div>
          </div>
        </div>
      </StyledCarousel>
      <StyledControls>
        <div className="content">
          <div
            className={`control ${activeImageIndex <= 0 ? 'disabled' : ''}`}
            onClick={() => updateActiveImageIndex(activeImageIndex - 1)}
          >
            <span className="prev"></span>
          </div>
          <StyledIndicators>
            <span className="current">{activeImageIndex + 1}</span>
            <span className="line">|</span>
            <span className="all">{screenshots.length}</span>
          </StyledIndicators>
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
