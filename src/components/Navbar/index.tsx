import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { SxProps } from '@mui/system';

import whiteArrow from 'assets/chevron-down-white.svg';
import arrow from 'assets/chevron-down.svg';

import styles from './styles';

type ComponentProps = {
    sx: {
        wrapper: SxProps
    };
}

const Navbar: FC<ComponentProps> = ({ sx = {} }) => {
    return (
        <Box sx={{ ...styles.wrapper, ...sx.wrapper }}>
            Navbar
        </Box>
    );
};

export default Navbar;
