import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: relative;
`;

export const StyledResultsList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, max-content);
  gap: 30px;

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
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 16px;
  }

  .itemContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem 1rem 1rem;
  }

  .name {
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border-top: 1px solid lightgray;
  }

  .button {
    position: relative;
    bottom: 0;
    display: inline-block;
    padding: 1rem 2rem;
    color: white;
    background-color: #0d48e4;
    border-radius: 40px;

    &:hover {
      background-color: #007bff;
    }
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
