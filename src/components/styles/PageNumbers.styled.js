import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    display: inline-block;
    padding: 10px 10px;
  }

  span:hover {
    cursor: pointer;
  }

  .inactive {
    color: lightgray;
  }

  .active {
    font-weight: 700;
    border-bottom: 2px solid #f3f3f3;
  }
`;

export const StyledControllers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 1.5rem;

  span {
    display: inline-block;

    &.prev,
    &.next {
      padding: 10px;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      &.disabled {
        color: #7d7d7d;

        &:hover {
          cursor: default;
        }
      }
    }
  }
`;
