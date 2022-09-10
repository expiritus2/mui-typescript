import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles/createTheme';
import styles from './styles';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

type ComponentProps = {
    sx?: { wrapper: (theme: Theme) => SystemStyleObject };
};

const BaseComponent: FC<ComponentProps> = (props) => {
    const { sx = { wrapper: () => ({}) } } = props;

    return <Box sx={(theme: Theme) => ({ ...styles.wrapper(theme), ...sx.wrapper(theme) })}>BaseComponent</Box>;
};

export default BaseComponent;
