import { createTheme } from '@mui/material/styles';
import { extendTheme } from '@mui/joy/styles';

export const lightest = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8fc4a9',
      contrastText: '#ffffff',
      dark: '#58a77e',
    },
    secondary: {
      main: '#db9c3f',
      contrastText: '#fdf8ec',
      dark: '#b27821',
    },
    warning: {
      main: '#db9c3f',
    },
    success: {
      main: '#8fc4a9',
    },
    divider: '#97a89d',
    text: {
      primary: '#595959',
      secondary: '#97a89d',
      disabled: '#97a89d',
      hint: '#595959',
    },
    info: {
      main: '#4da7da',
    },
    error: {
      main: '#e85a5a',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontFamily: 'Bebas Neue',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    h3: {
      fontFamily: 'Poppins',
    },
    h4: {
      fontFamily: 'Poppins',
    },
    h5: {
      fontFamily: 'Poppins',
    },
    h6: {
      fontFamily: 'Poppins',
    },
    button: {
      fontFamily: 'Bebas Neue',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '.075em',
    },
    fontSize: 16,
  },
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: 'transparent',
      },
    },
  },
});

export const light = createTheme(lightest, {
  palette: {
    background: {
      default: '#fdf8ec',
      paper: '#ffffff',
    },
  },
});

export const colored = createTheme(lightest, {
  palette: {
    background: {
      default: '#d8e9dd',
      paper: '#fdf8ec',
    },
  },
});


export const dark = createTheme(lightest, {
  palette: {
    background: {
      default: '#97a89d',
      paper: '#fdf8ec',
    },
  },
});


export const darkest = createTheme(lightest, {
  palette: {
    background: {
      default: '#595959',
      paper: '#fdf8ec',
    },
  },
});



export const defaultTheme = extendTheme({});

export const lightestJoy = extendTheme({
  cssVarPrefix: "tpc-01",
  fontFamily: {
    display: 'Bebas Neue', // applies to `h1`–`h4`
    body: 'Montserrat', // applies to `title-*` and `body-*`
  },
  fontSize: {
    xs: "0.875rem",
    sm: "1rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xl2: "1.875rem",
    xl3: "2.25rem",
    xl4: "2.5rem",
  },
  // typography: {
  //   "body-md": {
  //     fontSize: "var(--tpc-01-fontSize-md, 1.125rem)",
  //   }
  // },
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#d8e9dd',
        },
        neutral: {
          50: '#fdf8ec',
          100: '#ffecc5',
          200: '#ffe098',
          300: '#ffd369',
          400: '#ffc848',
          500: '#ffbd33',
          600: '#ffb12e',
          700: '#ffa127',
          800: '#ff9222',
          900: '#f67918',
        },
        primary: {
          50: '#d8e9dd',
          100: '#a3c8ad',
          200: '#68a37a',
          300: '#26814a',
          400: '#006c2a',
          500: '#005505',
          600: '#004a00',
          700: '#003c00',
          800: '#002e00',
          900: '#001a00',
        },
        text: {
          primary: "var(--joy-palette-primiary-800, #002e00)",
          secondary: "var(--joy-palette-primiary-700, #003c00)",
          tertiary: "var(--joy-palette-primiary-600, #004a00)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
});