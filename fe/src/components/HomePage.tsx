import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'
export default function HomePage() {
    const navigate = useNavigate()
    return (
        <Box className="main">
            <Box className="nav-bar">
                <Box className="logo-cont">
                    <Button 
                        className="logo"
                        onClick={() => navigate('/')}
                    >
                        MOVA
                    </Button>
                </Box>
                <Box className="signin-cont">
                    <Button 
                        variant="contained" color="error"
                        onClick={() => navigate('/login')}
                        className="disable-texttf"
                    >
                        Sign-In
                    </Button>
                </Box>
            </Box>
            <Box className="banner">
                <p className='text-lg'>
                    Unlimited movies, TV shows, and more.
                </p>
                <p className='text-xs'>
                    Watch anywhere. Cancel anytime.
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <Box>
                <Button 
                    variant='contained' 
                    color="error" 
                    className="signup-button disable-texttf"
                    onClick={() => navigate('/register')}
                >
                    Get Started
                </Button>
                </Box>
            </Box>
        </Box>
    )
}