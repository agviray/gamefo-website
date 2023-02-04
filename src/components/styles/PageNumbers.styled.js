import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: inline-block;
      padding: 10px 10px;
    }

    .pageNumbers {
      display: flex;
      align-items: center;
      gap: 10px;

      span:hover {
        cursor: pointer;
      }

      .inactive {
        color: lightgray;
      }

      .active {
        font-weight: 700;
        border-bottom: 2px solid #333333;
      }
    }
  }
`;

export const StyledPageController = styled.div`
  width: 100%;
  display: flex;

  span:hover {
    cursor: pointer;
  }

  &.hidden {
    visibility: hidden;
  }

  &.prev,
  &.next {
    align-items: center;
  }

  &.prev {
    justify-content: end;
  }

  &.next {
    justify-content: start;
  }
`;
