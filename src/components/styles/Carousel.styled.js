import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;

  .content {
    display: relative;

    .items {
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
