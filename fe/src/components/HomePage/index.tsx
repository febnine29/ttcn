import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './home.css'
export default function HomePage() {
    const navigate = useNavigate()
    const [atoken, setToken] = useState<string | null>('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        setToken(token)
        if(token !== null){
            navigate('/main')
        }
    },[atoken])
    
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
                <p className='text-md'>
                    Watch anywhere. Cancel anytime.
                </p>
                <p className='text-xs'>
                    Ready to watch? Let it started to become our membership.
                </p>
                <Box>
                <Button 
                    variant='contained' 
                    color="error" 
                    className="signup-button disable-texttf"
                    onClick={() => navigate('/register')}
                    endIcon={<NavigateNextIcon />}
                >
                    Get Started
                </Button>
                </Box>
            </Box>
        </Box>
    )
}