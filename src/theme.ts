import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

declare module '@mui/material' {
    interface ButtonPropsColorOverrides {
        purpleDark: any;
        purpleLight: any;
    }
}

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        purpleDark?: PaletteColorOptions;
        purpleLight?: PaletteColorOptions;
    }

    interface Palette {
        purpleDark: PaletteColor;
        purpleLight: PaletteColor;
    }
}

const breakpoints = createBreakpoints({});

const theme = createTheme({
    palette: {
        purpleDark: {
            main: '#673f86',
        },
        purpleLight: {
            main: '#9980B7',
        },
    },
    typography: {
        fontFamily: 'Montserrat+Alternates',
        h1: {
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '55px',
            textTransform: 'capitalize',
        },
        h2: {
            fontSize: '24px',
            lineHeight: '29px',
            textTransform: 'capitalize',
            [breakpoints.up('md')]: {
                fontSize: '36px',
                lineHeight: '44px',
            },
        },
        h3: {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            textTransform: 'uppercase',
            color: '#fff',
            [breakpoints.up('md')]: {
                fontSize: '24px',
                lineHeight: '29px',
            },
        },
        body2: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#000000',
            [breakpoints.up('md')]: {
                fontSize: '20px',
                lineHeight: '24px',
            },
        },
    },
});

export default theme;
