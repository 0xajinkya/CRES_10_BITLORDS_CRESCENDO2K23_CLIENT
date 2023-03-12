import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useRouter } from 'next/router';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const router = useRouter();

    const drawer = (


        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'space-between',

            }}
        >
            <List>

                <Box
                    sx={{
                        // paddingX: '1vw',
                        paddingRight: '2vw'
                    }}
                >


                    <InputBase startAdornment=<SearchRoundedIcon
                        sx={{
                            color: 'grey'
                        }} /> placeholder='Search' sx={{

                            marginTop: '2vh',
                            marginBottom: '2vh',
                            // marginRight: '1vw',
                            width: '15vw',
                            height: '5vh',
                            padding: '0.8vw',
                            color: 'black',
                            backgroundColor: '#eeeeee',
                            borderRadius: 4,

                        }}
                    />







                </Box>

                <ListItemButton
                    onClick={() => router.push('/')}
                >
                    <ListItemIcon>
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                    onClick={() => router.push('/appointments')}
                >
                    <ListItemIcon>
                        <CalendarMonthRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Appointments" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AssessmentRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Analysis" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LocalHospitalRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Medication" />
                </ListItemButton>
                <ListItemButton
                    onClick={() => router.push('/sensorData')}
                >
                    <ListItemIcon>
                        <TimelineRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sensor Data" />
                </ListItemButton>

            </List>

            <List>
                <ListItem key={'Settings'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItemButton>
                </ListItem>

                <ListItem key={'Log Out'} disablePadding>
                    <ListItemButton
                        onClick={() => {localStorage.removeItem('patient'); router.replace('/authenticate')}}
                    >
                        <ListItemIcon>
                            <LogoutRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Log Out'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>


    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

export default ResponsiveDrawer;