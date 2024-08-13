import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Navbar() {


    return (

        <AppBar position="static" style={{ backgroundColor: '#007bff', minHeight: '40px'  }}>
            <Toolbar style={{ justifyContent: 'space-between', minHeight: '40px' }}>
                {/* Left side: Text with Vertical Line */}
                <Box display="flex" alignItems="center">
                    <Typography variant="body1" style={{ fontFamily: 'sans-serif' }}>
                        Dispensaries in Washington DC
                    </Typography>
                    <Box
                        component="span"
                        sx={{
                            borderLeft: '1px dotted white',
                            height: '20px',
                            marginLeft: '10px',
                            marginRight: '10px',
                        }}
                    />
                </Box>

                {/* Center: Social Media Icons */}
                <Box display="flex" justifyContent="center" flexGrow={1}>
                    <IconButton color="inherit" href="https://facebook.com">
                        <Facebook />
                    </IconButton>
                    <IconButton color="inherit" href="https://twitter.com">
                        <Twitter />
                    </IconButton>
                    <IconButton color="inherit" href="https://instagram.com">
                        <Instagram />
                    </IconButton>
                </Box>

                {/* Right side: Empty Box for alignment */}
                <Box width="100px" />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
