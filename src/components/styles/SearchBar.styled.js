import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 80%;
  margin: 0 auto;

  .formContent {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.75rem 0.75rem;
    box-shadow: ${({ inputHasFocus }) =>
      inputHasFocus
        ? '0px 5px 8px 3px rgba(79,79,79,0.5)'
        : '0px 2px 5px 0px rgba(51,51,51,0.5)'};
    border-radius: 40px;
    background-color: ${({ inputHasFocus }) =>
      inputHasFocus ? 'rgba(243,243,243, 1)' : 'rgba(243,243,243, 0.5)'};
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(243, 243, 243, 1);
      box-shadow: 0px 5px 8px 3px rgba(79, 79, 79, 0.5);
    }

    label {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    .magnifyingGlassContainer {
      max-width: 20px;
      max-height: 20px;
      margin-right: 1rem;
    }

    input {
      color: #333333;
      border: none;
      outline: none;
      background-color: transparent;
      width: 100%;
      font-family: inherit;
      font-size: inherit;

      &::placeholder {
        color: lightgray;
      }
    }
  }
`;
