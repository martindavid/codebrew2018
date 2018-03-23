import { createMuiTheme } from 'material-ui/styles';
import cyan from 'material-ui/colors/cyan';
import blueGrey from 'material-ui/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
});

export default theme;
