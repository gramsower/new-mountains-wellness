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
    xs: ".75rem",
    sm: ".875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.24rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  
  fontWeights: {
    extraLight: 200,
    light: 300,
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
      fontSize: ["xs", "sm", "md", "lg"],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h2: {
      fontSize: ["xs", "sm", "md", "lg"],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h3: {
      fontSize: ["xs", "sm", "md", "lg"],
      fontWeight: '',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    pItal: {
      fontSize: ["xs", "sm", "md", "lg"],
      fontWeight: '200',
      fontStyle: 'italic',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    p: {
      fontSize: ["xs", "sm", "md", "lg"],
      fontWeight: 'light',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },

    link: {
      fontSize: ["xs", "sm", "md", "lg"],
      fontWeight: 'extraLight',
      lineHeight: '100%',
      letterSpacing: '-2%',
    }
  }
});

export default theme;