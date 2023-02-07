import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;

  .content {
    display: relative;

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
      padding: 5px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: #333333;
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
      background-color: #333333;
    }

    img {
      width: 100%;
    }
  }
`;
