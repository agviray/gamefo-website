import styled, { keyframes } from 'styled-components';

export const StyledLoader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  background-color: #242424;
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

    &.first {
      background-color: #83858d;
    }

    &.second {
      background-color: #6f717a;
    }

    &.third {
      background-color: #4b4d54;
    }

    &.fourth {
      background-color: #3f4047;
    }
  }
`;
