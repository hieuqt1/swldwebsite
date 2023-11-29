'use client'

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface HeaderItem {
    item: {
        id: number;
        title: string;
        href?: string;
        contents?: {
            id: number;
            title: string;
            href: string;
        }[];
    }
}

export default function AppHeaderItem({ item }: HeaderItem) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget)
        }
    }

    const closeMenu = () => {
        setAnchorEl(null)
    }

    return (
        <>
            {!item.contents || item.contents.length <= 0 ? (
                <Button component={Link} key={item.id} color='inherit' href={item.href}>{item.title}</Button>

            ) : (
                <>
                    <Button 
                        key={item.id} 
                        // aria-owns ties button to menu
                        aria-owns={anchorEl ? "simple-menu" : undefined} 
                        aria-haspopup='true' 
                        sx={{color: 'primary.contrastText'}}
                        href={item.href} 
                        onClick={toggleMenu}
                        onMouseOver={toggleMenu}>
                        {item.title}
                        <ExpandMoreIcon fontSize="small" className="icon-style" />
                    </Button>
                    <Menu 
                        id='simple-menu' 
                        anchorEl={anchorEl} 
                        open={Boolean(anchorEl)} 
                        onClose={closeMenu} 
                        MenuListProps={{onMouseLeave: closeMenu}}>
                        {item.contents.map((content) => (
                            <MenuItem color='primary.contrastText' component={Link} key={item.id} href={content.href}>
                                {content.title}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            )}
        </>
    );
}