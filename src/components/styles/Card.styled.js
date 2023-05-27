import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  height: 400px;
  border-radius: 20px;
  box-shadow: rgba(25, 25, 25, 0.7) 0px 3px 8px 0px;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(25, 25, 25, 1) 0px 10px 20px 2px;
  }

  @media screen and (min-width: 500px) {
    height: 450px;
  }
  @media screen and (min-width: 950px) {
    height: 475px;
  }

  @media screen and (min-width: 1300px) {
    height: 500px;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ imgUrl }) => (imgUrl ? `${imgUrl}` : '')});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const StyledContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;
  background-color: rgba(51, 51, 51, 0.6);

  h2 {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #f3f3f3;

    @media screen and (min-width: 950px) {
      font-size: 25px;
    }
  }

  div {
    padding-top: 2rem;
  }

  .button {
    position: relative;
    bottom: 0;
    display: inline-block;
    padding: 1rem 2rem;
    color: white;
    background-color: #0d48e4;
    border-radius: 40px;

    &:hover {
      background-color: #007bff;
    }
  }
`;
