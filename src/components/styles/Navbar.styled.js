import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 162px;
`;

export const StyledNavContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.25rem 0;
  background-color: #ffffff;

  .headingBlock {
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    h1 {
      display: inline-block;
    }
  }

  .searchBlock {
    width: 80%;
    margin: 0 auto;

    .searchBlockContent {
      display: flex;
      align-items: center;
      border: 1px solid #333333;
      border-radius: 40px;
      padding: 0.75rem 1rem;
      background-color: #ffffffff;

      .magnifyingGlassContainer {
        max-width: 20px;
        max-height: 20px;
        margin-right: 1rem;
      }

      span {
        display: inline-block;
      }
    }
  }
`;
