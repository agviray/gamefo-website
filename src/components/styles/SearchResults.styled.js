import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: relative;
`;

export const StyledResultsList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, max-content);
  gap: 25px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, max-content));
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, max-content));
    grid-template-rows: repeat(5, min-content);
  }
`;

export const StyledResultsItem = styled.div`
  height: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }

  .itemContent {
    padding: 0 1rem 1rem 1rem;
  }

  .name {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid lightgray;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
  overflow: hidden;
  max-height: 135px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
