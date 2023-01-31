import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #333333;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-indent: 0;
}

a {
  text-decoration: none;
  color: #333333;
}
`;

export const StyledMainContent = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1.25rem;
`;

export default GlobalStyles;
