import styled from 'styled-components';

export const StyledCard = styled.div`
  height: 400px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 16px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem 1rem 1rem;

  h2 {
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border-top: 1px solid lightgray;
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