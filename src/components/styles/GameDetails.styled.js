import styled from 'styled-components';

export const StyledGameDetails = styled.div`
  position: relative;
`;

export const StyledHero = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  .content {
    position: relative;
    height: 50vh;

    @media screen and (min-width: 950px) {
      height: 70vh;
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

    .heroImage {
      background-image: url(${({ imgUrl }) => imgUrl});
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;

      @media screen and (min-width: 1300px) {
        background-position: center top;
      }
    }
  }
`;

export const StyledInnerContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1.25rem;
  overflow-wrap: break-word;

  h2.name {
    padding-bottom: 1.5rem;
    font-size: 20px;

    @media screen and (min-width: 950px) {
      font-size: 30px;
    }
  }

  .innerContainer {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 16px;
      padding-top: 1rem;
    }

    p {
      padding-top: 1rem;
    }

    @media screen and (min-width: 950px) {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 20px;
      }
    }
  }
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    gap: 4rem;
  }

  .innerContainer {
    h3 {
      padding-bottom: 0.5rem;
    }
  }

  .platforms,
  .genres {
    display: flex;
    gap: 5px;
  }
`;

export const StyledDescription = styled.div`
  padding-top: 2rem;

  h3 {
    font-size: 18px;

    @media screen and (min-width: 950px) {
      font-size: 25px;
    }
  }
`;

export const StyledScreenshots = styled.div`
  padding-top: 2rem;
`;
