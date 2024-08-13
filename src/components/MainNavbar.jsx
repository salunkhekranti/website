import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box,Container } from '@mui/material';
import logo from '../assets/Image/logo.png';



function MainNavbar() {
    
    return (
        <AppBar position="static" style={{ backgroundColor: '#1a1a2e' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
               
                {/* Left Section: Logo */}
                <Box display="flex" alignItems="center">
                    <img
                        src={logo}
                    
                        style={{ width: '120px', marginRight: '15px' }}
                    />
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                    
                    </Typography>
                </Box>

                {/* Middle Section: Navigation Links */}
                <Box display="flex" alignItems="center">
                    <Button color="inherit" style={{ margin: '0 10px' }}>Home</Button>
                    <Button color="inherit" style={{ margin: '0 10px' }}>Shop Now</Button>
                    <Button color="inherit" style={{ margin: '0 10px' }}>ABOUT US</Button>
                    <Button color="inherit" style={{ margin: '0 10px' }}>CONTACT US</Button>
                    <Button color="inherit" style={{ margin: '0 10px' }}>BLOG</Button>
                </Box>

                {/* Right Section: Contact Button */}
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '10px', backgroundColor: '#007bff' }}
                >
                    (202)-428-9721
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default MainNavbar;
