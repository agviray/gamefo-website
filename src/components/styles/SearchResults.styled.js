import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: relative;
  max-width: 1600px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 950px) {
    padding: 209px 1.25rem 4rem 1.25rem;
  }

  .container {
    padding: 140px 1.25rem 4rem 1.25rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      display: inline-block;
      padding-bottom: 1.5rem;
    }

    .term {
      font-style: italic;
    }
  }
`;

export const StyledResults = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  gap: 30px;
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 100%));
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(3, minmax(0, 100%));
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, minmax(0, 100%));
    grid-template-rows: repeat(5, min-content);
  }
`;
