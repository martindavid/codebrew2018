import { createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '##ff567e',
      main: '#d60b52',
      dark: '#9e002a',
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
});

export default theme;
