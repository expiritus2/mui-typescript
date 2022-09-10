import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import close from 'assets/close.svg';

import { Navbar } from 'components';

import styles from './styles';
import { useTheme } from '@mui/material';

type ComponentProps = {
    sx?: { wrapper: (theme: Theme) => SystemStyleObject };
    open: boolean;
    onClose: () => void;
};

const Drawer: FC<ComponentProps> = (props) => {
    const { sx = { wrapper: () => ({}) }, open, onClose } = props;
    const cTheme = useTheme();

    return (
        <MuiDrawer
            anchor={'left'}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { width: '100%', zIndex: 4 },
            }}
            sx={(theme: Theme) => ({ ...styles.drawer, ...sx.wrapper(theme) })}
        >
            <Box sx={{ p: cTheme.typography.pxToRem(20) }}>
                <IconButton onClick={onClose} sx={{ p: 0 }}>
                    <Box component="img" src={close} />
                </IconButton>
                <Box sx={{ mt: cTheme.typography.pxToRem(24) }}>
                    <Navbar />
                </Box>
            </Box>
        </MuiDrawer>
    );
};

export default Drawer;
