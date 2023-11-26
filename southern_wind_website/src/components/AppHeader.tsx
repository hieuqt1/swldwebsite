import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import logo from '../app/assets/icons/gio-nam-transparent-logo.png'

export default function AppHeader() {
    const headerItems = [
        {
            id: 0,
            title: "About Us",
            href: "/about",
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
            title: "Our Pride",
            href: "/our-pride",
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
            <AppBar position="sticky">
                <Toolbar sx={{ px: '6em !important' }}>
                    <Button startIcon={<Avatar src={logo.src} sx={{ width: 64, height: 64 }} />} color="inherit" sx={{ fontSize: '1.5em' }}>
                        Gió Nam Múa Lân
                    </Button>
                    <Box display='flex' justifyContent='flex-end' sx={{ flexGrow: 1 }}>
                        <Button color="inherit">About Us</Button>
                        <Button color="inherit">History</Button>
                        <Button color="inherit">Our Pride</Button>
                        <Button color="inherit">Join Us</Button>
                        <Button color="inherit">Contact</Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}