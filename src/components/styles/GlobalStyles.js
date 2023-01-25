import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-indent: 0;
  }

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
