import { Overpass } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const overpass = Overpass({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // main: '#02A3FE',
      main: '#147C71',
    },
    secondary: {
      main: '#02A3FE',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: overpass.style.fontFamily,
  },
});

export default theme;