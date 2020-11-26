import { spacing, fontSizes } from './units';
import { colors } from './colors';

const breakpoints = [
    '1540px', // 0
    '1356px', // 1
    '1080px', // 2
    '968px', // 3
    '768px', // 4
    '640px', // 5
    '512px', // 6
    '420px', // 7
];

const fontWeights = {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
};

const lineHeights = {
    body: 1.4,
    heading: 1.2,
    code: 1.6,
};

const typography = {
    header: "SourceSansPro, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    body:
        "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    monospace: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
};

const shape = {
    borderRadius: "10px",
    borderRadiusSmall: "5px",

};

const animations = {
    default: '0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
    hover: '0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
    active: '0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
};

const shadows = {
    none: 'none',
    default: '0 4px 8px rgba(0,0,0,0.08)',
    hover: '0 8px 24px rgba(0,0,0,0.10)',
    active: '0 6px 20px rgba(0,0,0,0.09)',
    button: '0 2px 4px rgba(0,0,0,0.08)',
    largeHover:
        '0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)',
};

export const theme = {
    breakpoints,
    fontWeights,
    fontSizes,
    lineHeights,
    colors,
    shadows,
    typography,
    shape,
    animations,
    spacing,
};

export default theme;
