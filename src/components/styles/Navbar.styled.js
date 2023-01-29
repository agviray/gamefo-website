import styled from 'styled-components';

export const StyledNavContent = styled.div`
  .headingBlock {
    padding-bottom: 3rem;
  }

  .searchBlock {
    display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
    width: 100%;

    div {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      border: 1px solid #333333;
      border-radius: 40px;
      padding: 0.75rem 1rem;
      background-color: #ffffffff;

      img {
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
