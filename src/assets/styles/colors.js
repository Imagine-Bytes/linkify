import lessToJs from 'less-vars-to-js';
// eslint-disable-next-line import/no-webpack-loader-syntax
import colorPalettes from '!!raw-loader!./scss/_colors.scss';
import { objectToCamelCase } from '../../utils/helpers';

const colorsVars = lessToJs(colorPalettes, {
    resolveVariables: true,
    stripPrefix: true,
});

const colors = objectToCamelCase(colorsVars);

export { colors };
