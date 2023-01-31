import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 162px;

  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2.5rem 0;
    background-color: #ffffff;
    z-index: 1;
  }
`;

export const StyledNavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;

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
      border-radius: 40px;
      padding: 0.75rem 0.75rem;
      background-color: #ffffffff;
      color: grey;
      box-shadow: 0px 2px 5px 0px rgba(51, 51, 51, 0.5);
      transition: all 0.3s ease;

      &:hover {
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
  }
`;
