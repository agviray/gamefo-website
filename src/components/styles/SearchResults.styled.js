import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: relative;
`;

export const StyledResultsList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, max-content);
  gap: 30px;
  padding-bottom: 100px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, max-content));
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, max-content));
    grid-template-rows: repeat(5, min-content);
  }
`;
