import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    span {
      display: inline-block;
      padding: 5px 10px;
    }
  }
`;
