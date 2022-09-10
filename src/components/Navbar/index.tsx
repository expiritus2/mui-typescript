import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import whiteArrow from 'assets/chevron-down-white.svg';
import arrow from 'assets/chevron-down.svg';

import styles from './styles';
import { Theme } from '@mui/material/styles/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

const pages = [
    { title: 'Home', arrow: false },
    { title: 'About', arrow: false },
    { title: 'Course', arrow: true },
    { title: 'Page', arrow: true },
    { title: 'Blog', arrow: true },
    { title: 'Contact', arrow: false },
];

type ComponentProps = {
    sx?: { wrapper: (theme: Theme) => SystemStyleObject };
    white?: boolean;
};

const Navbar: FC<ComponentProps> = (props) => {
    const { white, sx = { wrapper: () => ({}) } } = props;
    return (
        <Box sx={(theme: Theme) => ({ ...styles.navbar(), ...sx.wrapper(theme) })}>
            {pages.map((page) => (
                <Link
                    key={page.title}
                    sx={(theme: Theme) => ({ ...styles.link(theme), color: white ? '#fff' : '#000' })}
                >
                    {page.title}{' '}
                    {page.arrow && <Box component="img" src={white ? whiteArrow : arrow} sx={styles.arrow}></Box>}
                </Link>
            ))}
        </Box>
    );
};

export default Navbar;
