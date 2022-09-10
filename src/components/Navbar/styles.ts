import { Theme } from '@mui/material/styles/createTheme';

const styles = {
    navbar: () => ({
        flexGrow: 1,
        display: { lg: 'flex' },
    }),
    link: (theme: Theme) => ({
        my: 2,
        color: '#fff',
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(20),
        lineHeight: theme.typography.pxToRem(24),
        py: theme.typography.pxToRem(6),
        display: 'flex',
        mr: theme.typography.pxToRem(24),
        textDecoration: 'none',
    }),
    arrow: (theme: Theme) => ({
        ml: theme.typography.pxToRem(5),
        width: theme.typography.pxToRem(25),
    }),
};

export default styles;
