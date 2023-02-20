import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;

  .content {
    position: relative;
    max-height: 100px;
    overflow: hidden;
    transition: max-height 0.5s ease;

    &::before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(43, 43, 43, 0), rgba(43, 43, 43, 1));
    }

    &.isOpen {
      max-height: ${({ scrollHeight }) =>
        scrollHeight ? `${scrollHeight}px` : ''};

      &::before {
        display: none;
      }
    }
  }

  .toggler {
    font-size: 14px;
    display: flex;
    justify-content: center;
  }

  .button {
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
      cursor: pointer;
    }

    span {
      &:nth-of-type(2) {
        width: 10px;
        height: 10px;
        border-right: 1px solid #f3f3f3;
        border-bottom: 1px solid #f3f3f3;
        transform: translateY(-2.5px) rotate(45deg);

        &.isOpen {
          transform: translateY(2.5px) rotate(-135deg);
        }
      }
    }
  }
`;
