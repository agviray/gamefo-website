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
  position: relative;
  width: 100%;
  height: 25vh;
  overflow: hidden;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    animation-name: ${panRight};
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 100%;
`;
