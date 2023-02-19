import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledFooterContent = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem;
  display: flex;
  justify-content: center;

  .apiCredit {
    font-size: 14px;
    color: #7d7d7d;

    a {
      color: #9a9a9a;
    }
  }
`;
