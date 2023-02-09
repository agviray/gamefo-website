import styled from 'styled-components';

export const StyledGameDetails = styled.div`
  position: relative;
`;

export const StyledHero = styled.div`
  position: relative;
  overflow: hidden;

  .content {
    position: relative;

    @media screen and (min-width: 950px) {
      height: 50vh;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
    }

    img {
      width: 100%;
    }
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1.25rem;
`;

export const StyledContent = styled.div`
  overflow-wrap: break-word;

  div {
    img {
      width: 100%;
    }
  }
`;
