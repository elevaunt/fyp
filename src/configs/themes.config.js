import { createTheme } from '@mui/material/styles';

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

