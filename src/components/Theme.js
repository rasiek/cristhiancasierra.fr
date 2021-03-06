import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    overrides: {
        MuiButton: {
            contained: {
                color: '#ef5f63',
                borderRadius: '18px'
            }

        }
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#393e46',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: '#0066ff',
            main: '#eeeeee',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ef5f63',
        },
        third: {
            main: '#aad8d3'
        },
        fourth: {
            main: '#00adb5',
            // contrastText: '#ef5f63',

        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        // contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});