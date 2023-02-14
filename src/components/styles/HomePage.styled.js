import styled from 'styled-components';

export const StyledHomePage = styled.div`
  position: relative;
`;

export const StyledSlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
