import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

import styles from './styles';

const pages = [
    { title: 'Home', arrow: false },
    { title: 'Home2', arrow: false },
];

type ComponentProps = {
    sx: { wrapper: SxProps };
};

const BaseComponent: FC<ComponentProps> = ({ sx = {} }) => {
    return <Box sx={{ ...styles.wrapper, ...sx.wrapper }}>BaseComponent</Box>;
};

export default BaseComponent;
