import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: relative;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 140px 1.25rem 4rem 1.25rem;

  @media screen and (min-width: 950px) {
    padding: 209px 1.25rem 4rem 1.25rem;
  }
`;

export const StyledResultsList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  gap: 30px;
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
