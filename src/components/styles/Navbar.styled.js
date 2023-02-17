import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;

  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 1.25rem;
    background-color: rgba(43, 43, 43, 0.7);
    backdrop-filter: blur(5px);
    z-index: 1;
  }
`;

export const StyledNavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ isInputActive }) => (isInputActive ? '' : '1.25rem')};

  @media screen and (min-width: 950px) {
    display: block;
  }

  .headingBlock {
    width: 20%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: width 0.2s linear;

    &.active {
      width: 0;
    }

    @media screen and (min-width: 950px) {
      width: auto;
      font-size: 2rem;
      padding-bottom: 2rem;
      overflow: auto;
      transition: none;

      &.active {
        width: auto;
      }
    }

    h1 {
      font-size: unset;
      display: inline-block;
    }
  }

  .searchBlock {
    position: relative;
    width: 100%;
    margin: 0 auto;

    .searchBlockContent {
      display: flex;
      align-items: center;
      border-radius: 40px;
      padding: 0.75rem 0.75rem;
      background-color: rgba(243, 243, 243, 0.5);
      color: lightgray;
      box-shadow: 0px 2px 5px 0px rgba(51, 51, 51, 0.5);
      transition: all 0.2s ease;

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
  }
`;

export const StyledErrorMessage = styled.div`
  padding-top: 0.5rem;
  color: #007bff;
`;
