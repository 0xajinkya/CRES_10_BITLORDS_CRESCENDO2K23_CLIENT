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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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
                        paddingX: '1vw',
                        paddingRight: '1vw'
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
                        borderRadius: 4
                    }}
                    />







                </Box>

                <ListItemButton>
                    <ListItemIcon>
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton>
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
                <ListItemButton>
                    <ListItemIcon>
                        <TimelineRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sensor Data" />
                </ListItemButton>

            </List>

            <List>
                {['Settings', 'Log out'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <SettingsIcon /> : <LogoutRoundedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
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