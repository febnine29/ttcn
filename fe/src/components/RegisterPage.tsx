import React from 'react';
import {Box,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import '../styles/register.css'
export default function HomePage() {
    const navigate = useNavigate()
    return (
        <Box className='main'>
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

        </Box>
    )
}