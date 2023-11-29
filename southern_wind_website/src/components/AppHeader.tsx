import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar, Link } from '@mui/material';
import logo from '../app/assets/icons/gio-nam-transparent-logo.png'
import MenuIcon from '@mui/icons-material/Menu';

import AppHeaderItem from './AppHeaderItems';

export default function AppHeader() {
    const headerItems = [
        {
            id: 0,
            title: "About Us",
            contents: [
                {
                    id: 0,
                    title: "Our Philosophy",
                    href: "/about/our-philosophy",
                },
                {
                    id: 1,
                    title: "Meet the Instructors",
                    href: "/about/meet-the-instructors",
                },
            ],
        },
        {
            id: 1,
            title: "History",
            href: "/history",
        },
        {
            id: 2,
            title: "Media",
            contents: [
                {
                    id: 0,
                    title: "Gallery",
                    href: "/media/gallery",
                },
                {
                    id: 1,
                    title: "Our Pride",
                    href: "/media/our-pride",
                },
            ],
        },
        {
            id: 3,
            title: "Join Us",
            href: "/join-us",
        },
        {
            id: 4,
            title: "Contact",
            href: "/contact",
        },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" color='primary'>
                <Toolbar sx={{ px: '3em !important' }} >
                    <Button 
                        component={Link}
                        href='/'
                        disableRipple
                        startIcon={<Avatar src={logo.src} sx={{ width: 48, height: 48 }} />}
                        sx={{
                            color: 'primary.contrastText',
                            fontSize: '1.5rem',
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}>
                        Gió Nam Múa Lân
                    </Button>
                    <Box display='flex' alignItems='center' justifyContent='flex-end' sx={{ flexGrow: 1 }} >
                        {headerItems.map((item) => {
                            return (<AppHeaderItem item={item} />)
                        })}
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}