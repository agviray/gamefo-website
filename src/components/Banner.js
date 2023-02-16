import React, { useState, useEffect } from 'react';
import {
  StyledBanner,
  StyledImageContainer,
  StyledImage,
} from './styles/Banner.styled';

// *** Scrolls HORIZONTALLY ***
const Banner = ({ bannerGroup, isReverse }) => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    if (bannerGroup) {
      setUrls([...bannerGroup.imageUrls]);
    }
  }, [bannerGroup]);

  return (
    <StyledBanner isReverse={isReverse}>
      <div className="content">
        {urls.map((url, index) => (
          <StyledImageContainer key={index}>
            <StyledImage imgUrl={url}></StyledImage>
          </StyledImageContainer>
        ))}
      </div>
      <div className="content">
        {urls.map((url, index) => (
          <StyledImageContainer key={index}>
            <StyledImage imgUrl={url}></StyledImage>
          </StyledImageContainer>
        ))}
      </div>
    </StyledBanner>
  );
};

export default Banner;
