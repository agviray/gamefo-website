import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%{
    transform: rotateX(0);
  }
/* 
  50% {
    transform: rotateX(100deg);
  } */

  100%{
    transform: rotateX(200deg);
  }
`;

export const StyledNotFound = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 4;
  padding: 1.25rem;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    text-align: center;
    font-family: 'AGaramond Regular', 'Times New Roman', Times, serif;
    font-size: clamp(2.625rem, 0rem + 12vw, 7.125rem);
    font-weight: 400;
    color: #670606;
    opacity: 0;
    transform: scale(0);
    transition: all 2s ease-out;

    &.isShown {
      opacity: 1;
      transform: scale(1);
    }
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding-top: 2rem;
    color: #f3f3f3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s 2s ease;

    &.isShown {
      visibility: visible;
      opacity: 1;
    }

    span {
      line-height: 1.5;

      &:nth-of-type(1) {
        padding-bottom: 1rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      .arrow {
        position: relative;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 10px solid #c19c47;
        animation-name: ${rotate};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }

      .option {
        padding: 0.5rem;
      }
    }
  }
`;
