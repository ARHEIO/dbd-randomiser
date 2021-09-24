import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2a2b',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1f2020',
    },
  },
});

export default theme;
