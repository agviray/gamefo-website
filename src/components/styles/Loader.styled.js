import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  z-index: 2;
  background-color: #242424;

  span {
    color: #83858d;
    animation-name: ${fade};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const StyledSquares = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  width: 43px;

  span {
    width: 20px;
    height: 20px;
    animation-name: ${fade};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &.first {
      animation-delay: 0s;
      background-color: #83858d;
    }

    &.second {
      background-color: #6f717a;
      animation-delay: 0.2s;
    }

    &.third {
      background-color: #4b4d54;
      animation-delay: 0.4s;
    }

    &.fourth {
      background-color: #3f4047;
      animation-delay: 0.6s;
    }
  }
`;
