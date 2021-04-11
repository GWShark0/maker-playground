import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import colors from './colors';

const palette = {
  primary: {
    light: colors.yellow[400],
    main: colors.yellow[500],
    dark: colors.yellow[600],
  },
  secondary: {
    light: colors.blue[400],
    main: colors.blue[500],
    dark: colors.blue[600],
  },
  error: {
    light: colors.red[100],
    main: colors.red[500],
    dark: colors.red[700],
  },
  warning: {
    light: colors.orange[100],
    main: colors.orange[500],
    dark: colors.orange[700],
  },
  success: {
    light: colors.green[100],
    main: colors.green[500],
    dark: colors.green[700],
  },
  grey: colors.gray,
  gray: colors.gray,
  yellow: colors.yellow,
  blue: colors.blue,
  pink: colors.pink,
};

const typography = {
  fontFamily: 'proxima-nova, "Roboto", "Helvetica", "Arial", sans-serif',
  button: {
    fontSize: '1rem',
    lineHeight: 1.5,
    textTransform: 'none',
    fontWeight: 'bold',
  },
};

const overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
      },
      '#root': {
        height: '100%',
      },
    },
  },
  MuiButton: {
    root: {
      borderRadius: '999rem',
      fontWeight: 600,
      '&:focus': {
        outline: 'none !important', // override tailwindcss specificity
      },
    },
    contained: {
      padding: '8px 32px',
      boxShadow: 'none',
      color: colors.white,
      backgroundColor: colors.black,
      '&:hover': {
        backgroundColor: colors.gray[800],
        boxShadow: 'none',
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: colors.yellow[600],
      },
    },
    outlined: {
      padding: '8px 32px',
      borderColor: colors.black,
      borderWidth: '2px',
    },
    text: {
      padding: '8px 32px',
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: '32px',
    },
  },
  MuiSlider: {
    rail: {
      height: 4,
      borderRadius: 8,
      backgroundColor: colors.black,
      opacity: 0.125,
    },
    track: {
      height: 4,
      borderRadius: 8,
    },
    thumb: {
      marginTop: -6,
      marginLeft: -8,
      width: 16,
      height: 16,
    },
  },
  MuiTabs: {
    root: {
      borderBottom: 'none',
    },
    indicator: {
      height: 3,
    },
  },
  MuiTab: {
    root: {
      color: colors.gray[700],
      '&:focus': {
        outline: 'none !important', // override tailwindcss specificity
      },
      '&$selected': {
        color: colors.black,
      },
    },
  },
  MuiTableCell: {
    head: {
      fontWeight: 600,
    },
  },
};

const themeName = 'Storyblocks';

const theme = createMuiTheme({
  overrides,
  palette,
  themeName,
  typography,
});

export default theme;
