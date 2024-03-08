import React, { useState } from 'react';
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDownwardOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from './FlexBetween';
import { UseDispatch, useDispatch } from 'react-redux';
import { setMode } from 'state';
import profil from 'assets/prf.png';
import { AppBar, Button, IconButton, InputBase, Toolbar, useTheme, Box, Typography, Menu, MenuItem } from '@mui/material';


const Navbar = ({ isSidebarOpen, setiISidebarOpen, user }) => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    // Functions
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar sx={{
            position: 'static',
            background: 'none',
            boxShadow: 'none',
        }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', }} >
                {/* {console.log(isSidebarOpen)} */}
                {/* {LEFT SIDE} */}
                <FlexBetween>
                    <IconButton onClick={() => setiISidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>

                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="0.2rem"
                        p="0.1rem 0.5rem"
                    >
                        <InputBase placeholder='Serach...' />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
                {/* {RIGHT SIDE} */}
                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined sx={{ fontSize: '25px' }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: '25px' }} />
                        )}

                    </IconButton>
                    <IconButton >
                        <SettingsOutlined sx={{ fontSize: '25px' }} />
                    </IconButton>
                    <FlexBetween>

                    </FlexBetween>
                    <Button onClick={handleClick} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: "1rem" }}>
                        <Box
                            component="img"
                            alt='profile'
                            src={profil}
                            height='32px'
                            width="32px"
                            borderRadius='50%'
                            sx={{
                                objectFit: "cover"
                            }}
                        />
                        <Box textAlign="left" >
                            <Typography fontWeight='bold' fontSize="0.5rem" sx={{ color: theme.palette.secondary[200] }}>
                                {user.name}
                            </Typography>

                            <Typography fontWeight='bold' fontSize="0.5rem" sx={{ color: theme.palette.secondary[200] }}>
                                {user.occupation}
                            </Typography>
                        </Box>
                        <ArrowDropDownOutlined
                            sx={{
                                color: 'red', fontSize: '30px', fontWeight:"bold"
                            }}
                        />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={isOpen}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}

                        
                    >
                        <MenuItem onClick={handleClose} >
                            Log Out
                        </MenuItem>
                    </Menu>
                </FlexBetween>
            </Toolbar>


        </AppBar>
    )
}

export default Navbar