import styled from 'styled-components';

export const StyledContent = styled.div`
  .formContent {
    position: relative;
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    border: 1px solid #333333;
    border-color: ${({ inputHasFocus }) => (inputHasFocus ? 'red' : '#333333')};
    border-radius: 40px;
    padding: 0.75rem 1rem;
    background-color: #ffffffff;

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
        color: #333333;
      }
    }
  }
`;
