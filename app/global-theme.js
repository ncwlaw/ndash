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
    zIndex: {
        highest: 300,
        higher: 200,
        high: 100,
        normal: 1,
        low: -100,
        lower: -200,
        lowest: -300,
    },
});

export default theme;
