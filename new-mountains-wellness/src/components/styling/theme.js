import { extendTheme } from "@chakra-ui/react";
import "@fontsource/source-sans-pro";

const theme = extendTheme ({
  colors: {
    transparent: "transparent",
    green: "#91a182",
    lightGreen: "#ccd6c6",
    greyGreen: "#e0e2dc",
    black: "#141414",
    white: "#ffffff",
    tan: "  #e4d4c7",
  },

  fonts: {
    body: "Source Sans Pro, sans-serif",
    heading: "Source Sans Pro, sans-serif",
    mono: "Menlo, monospace",
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  
  fontWeights: {
    normal: 400,
    medium: 500,
    mediumBold: 600,
    bold: 700,
  },

  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",

  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  textStyles: {
    h1: {
      fontSize: ['19px', '24px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h2: {
      fontSize: ['14px', '20px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h3: {
      fontSize: ['12px', '16px'],
      fontWeight: '',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    pItal: {
      fontSize: ['12px', '16px'],
      fontWeight: '200',
      fontStyle: 'italic',
      lineHeight: '110%',
      letterSpacing: '-2%',
  },
  p: {
    fontSize: ['12px', '16px'],
    fontWeight: '200',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
}

});

export default theme;