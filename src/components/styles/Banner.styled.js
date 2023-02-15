import styled, { keyframes } from 'styled-components';

const panRight = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`;

export const StyledBanner = styled.div`
  height: 25vh;
  display: flex;

  .content {
    display: flex;
    animation-name: ${panRight};
    animation-duration: 500s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 100%;
`;

export const StyledImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
