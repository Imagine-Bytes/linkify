import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-webpack-loader-syntax
import variables from '!!raw-loader!./scss/global.scss';

const GlobalStyle = createGlobalStyle`
  ${variables}
`;

export default GlobalStyle;
