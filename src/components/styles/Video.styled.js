import styled from 'styled-components';

export const StyledVideo = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;

    &:hover {
      cursor: pointer;
    }

    .playSymbol {
      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      border-left: 25px solid #f3f3f3;
    }

    img {
      width: 100%;
    }
  }

  .video {
    width: 100%;
    height: 100%;
  }
`;
