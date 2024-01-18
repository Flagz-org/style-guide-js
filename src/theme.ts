import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          fontWeight: 400,
          fontFamily: 'Poppins',
          borderRadius: 10,
          textTransform: 'none'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '30px'
    },
    h2: {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '30px'
    },
    h3: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 400
    },
    h4: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 400
    },
    body1: {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 300
    },
    body2: {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 200
    }
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#f78c6c',
      light: '#f9a984',
      dark: '#c06449',
      contrastText: '#fff'
    },
    secondary: {
      main: '#2ac3de',
      light: '#3cd1ee',
      dark: '#1a8fb4',
      contrastText: '#fff'
    },
    error: {
      main: '#ff6188',
      light: '#ff758f',
      dark: '#b24360',
      contrastText: '#fff'
    },
    background: {
      default: '#002451',
      paper: '#001e3a'
    },
    text: {
      primary: '#d6deeb',
      secondary: '#c0c5ce'
    }
  }
})
