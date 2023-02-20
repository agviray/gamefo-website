import { createGlobalStyle } from 'styled-components';
import AGaramondRegularOtf from '../../fonts/adobe_garamond_otf/AGaramond-Regular.otf';
import AGaramondRegularSCOtf from '../../fonts/adobe_garamond_otf/AGaramond-RegularSC.otf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "AGaramond Regular";
    src: url(${AGaramondRegularOtf});
  }

  @font-face {
    font-family: "AGaramond Regular SC";
    src: url(${AGaramondRegularSCOtf});
  }
`;

export default GlobalFonts;
