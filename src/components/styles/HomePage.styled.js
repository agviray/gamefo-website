import styled from 'styled-components';

export const StyledHomePage = styled.div`
  position: relative;

  .hero {
    position: relative;
    min-height: 100vh;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 25vh 0;

    .banner1,
    .banner2 {
      position: absolute;
      left: 0;
    }

    .banner1 {
      top: 0;
    }

    .banner2 {
      bottom: 0;
    }

    .content {
      display: relative;

      .innerContainer {
        max-width: 1000px;
        width: 80%;
        margin: 0 auto;

        h1 {
          padding-bottom: 2rem;
          text-align: center;
          font-size: 25px;

          @media screen and (min-width: 950px) {
            font-size: 32px;
          }
        }

        p {
          padding-bottom: 1rem;
          text-align: center;

          @media screen and (min-width: 950px) {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export const StyledSearchBlock = styled.div`
  position: relative;
  padding-top: 1.5rem;

  .searchBlockContent {
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 0.75rem 0.75rem;
    background-color: rgba(243, 243, 243, 0.5);
    color: lightgray;
    box-shadow: 0px 2px 5px 0px rgba(51, 51, 51, 0.5);
    transition: all 0.3s ease;

    &:hover {
      color: lightgray;
      background-color: rgba(243, 243, 243, 1);
      box-shadow: 0px 5px 8px 3px rgba(79, 79, 79, 0.5);
    }

    .magnifyingGlassContainer {
      max-width: 20px;
      max-height: 20px;
      margin-right: 1rem;
    }

    span {
      display: inline-block;
    }
  }
`;
