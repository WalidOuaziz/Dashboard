import React, { useEffect, useState } from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    ArrowDropDownOutlined

} from '@mui/icons-material';

import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profil from "assets/prf.png"
import { act } from 'react-dom/test-utils';

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "Client Facing",
        icon: null
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />
    },
    {
        text: "transaction",
        icon: <ReceiptLongOutlined />
    },
    {
        text: "Geography",
        icon: <PublicOutlined />
    },
    {
        text: "Sales",
        icon: null
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />
    },
    {
        text: "Daily",
        icon: <TodayOutlined />
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />
    },
    {
        text: "Management",
        icon: null
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />
    },
]

const Sidebar = ({ isNonMobile, isSidebarOpen, setiISidebarOpen, drawerWidth, user }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();
    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])
    return (
        <Box component="nav" >
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setiISidebarOpen(false)}
                    anchor='left'
                    variant='persistent'
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-Paper": {
                            color: theme.palette.secondary[100],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.4rem 2rem 2rem 3rem">
                            <FlexBetween>
                                <Box display="flex" alignItems='center' gap="0.5rem">
                                    <Typography variant='h4' fontWeight='bold'>
                                        Géoinformation
                                    </Typography>
                                    
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setiISidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>

                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "2.5rem 0 1rem 3rem", fontWeight: "bold" }}>
                                            {text}
                                        </Typography>
                                    )
                                }

                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText ?
                                                    theme.palette.secondary[600] : "transparent",
                                                color: active === lcText
                                                    ? theme.palette.primary[100]
                                                    : theme.palette.secondary[200],

                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[200]
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: 'auto' }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>

                    </Box>
                    <Box position="static" bottom='2rem'>
                        <Divider />
                        <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 3rem">
                            <Box
                                component="img"
                                alt='profile'
                                src={profil}
                                height='40px'
                                width="40px"
                                borderRadius='50%'
                                sx={{
                                    objectFit: "cover"
                                }}
                            />
                            <Box textAlign="left" >
                                <Typography fontWeight='bold' fontSize="0.9rem" sx={{ color: theme.palette.secondary[200] }}>
                                    {user.name}
                                </Typography>

                                <Typography fontWeight='bold' fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
                                    {user.occupation}
                                </Typography>
                            </Box>

                            <SettingsOutlined
                                sx={{ color: theme.palette.secondary[400], fontSize: "25px" }}
                            />


                        </FlexBetween>

                    </Box>

                </Drawer>
            )}
        </Box>
    )
}

export default Sidebar