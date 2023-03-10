import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

export const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;

  .content {
    display: relative;

    @media screen and (min-width: 950px) {
      .prevArrowContainer,
      .nextArrowContainer {
        position: absolute;
        width: 30px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .prevArrowContainer {
        top: 0;
        left: 0;
      }

      .nextArrowContainer {
        top: 0;
        right: 0;
      }

      .box {
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: rgba(51, 51, 51, 0.7);

        &.disabled {
          visibility: hidden;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .prev,
      .next {
        width: 20px;
        height: 20px;
        border-width: 2px 2px 0 0;
        border-style: solid;
        border-color: #f3f3f3;
      }

      .prev {
        transform: translateX(4px) rotate(-135deg);
      }

      .next {
        transform: translateX(-4px) rotate(45deg);
      }
    }

    .items {
      display: flex;
      transition: transform 0.3s;

      .imgContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100%;

        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
`;

export const StyledSwiperOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (min-width: 950px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 20%;
  }

  img {
    position: relative;
    width: 100%;
    max-width: 100px;
    animation-name: ${fade};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  span {
    display: inline-block;
    padding: 7px 20px;
    background-color: #0d48e4;
    border-radius: 40px;
    width: 100%;
    max-width: 100px;
    min-width: 80px;
    text-align: center;
  }
`;

export const StyledControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1.25rem;

  .control {
    display: inline-block;

    &:hover {
      cursor: pointer;
    }

    .prev,
    .next {
      display: block;
      padding: 3px;
      border-width: 1px 1px 0 0;
      border-style: solid;
      border-color: #f3f3f3;
    }

    .prev {
      transform: translateX(7px) rotate(-135deg);
    }

    .next {
      transform: translateX(-6px) rotate(45deg);
    }

    &.disabled {
      visibility: hidden;
    }
  }
`;

export const StyledIndicators = styled.div`
  display: inline-block;
  padding: 0 1.25rem;

  span {
    display: inline-block;
    font-size: 14px;
  }

  .line {
    padding: 0 7px;
  }
`;

export const StyledThumbnails = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 1.25rem;

  div {
    position: relative;
    display: flex;
    align-items: center;
    width: 25%;
    max-width: 200px;
    padding-bottom: 10px;

    &:hover {
      cursor: pointer;
    }

    &.activeImage::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #f3f3f3;
    }

    img {
      width: 100%;
    }
  }
`;
