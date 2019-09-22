import { createMuiTheme } from "@material-ui/core/styles";
import { green, grey, red } from "@material-ui/core/colors";

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#ffffff",
      dark: "#1e1e1f"
    },
    secondary: {
      light: "#fff",
      main: "#888",
      dark: "#000"
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e"
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700]
    },
    success: {
      xLight: green[50],
      dark: green[700]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 11,
    fontWeightLight: 200, // Work Sans
    fontWeightRegular: 300, // Work Sans
    fontWeightMedium: 500, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  }
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: "uppercase"
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200]
    }
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 40
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 38
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 32
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 26
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 18,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 16
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 16
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 14
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 12
    }
  }
};

export default theme;
