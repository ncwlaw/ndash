import { getContrastText, createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#76b900',
      contrastText: '#ffffff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme
