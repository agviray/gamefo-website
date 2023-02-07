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
        display: inline-block;
        justify-content: center;
        align-items: center;
        min-width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export const StyledControls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover .content > .control {
    background-color: rgba(51, 51, 51, 0.5);
    cursor: pointer;
  }

  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;

    .control {
      display: inline-block;
      padding: 10px;
      background-color: rgba(51, 51, 51, 0);
      transition: all 0.3s;

      &:nth-child(1) {
        margin-left: 5px;
      }

      &:nth-child(2) {
        margin-right: 5px;
      }

      .prev,
      .next {
        display: block;
        padding: 10px;
        border-width: 3px 3px 0 0;
        border-style: solid;
        border-color: rgba(243, 243, 243, 1);
        transition: all 0.3s;
      }

      .prev {
        transform: translateX(7px) rotate(-135deg);
      }

      .next {
        transform: translateX(-6px) rotate(45deg);
      }
    }
  }
`;
