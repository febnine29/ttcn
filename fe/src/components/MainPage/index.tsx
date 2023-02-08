import React, {useState,useEffect} from 'react';
import { Box, Button } from '@mui/material';
import YouTube, { YouTubeProps } from 'react-youtube';
import PlayArrow  from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause'
import ReactPlayer from 'react-player';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { header } from '../../commons/common';
import axios from 'axios'
import { singleMovie, IMovies } from '../../commons/type';
import './main.css'

interface Iwh{
    width: string;
    height: string;
}
export default function MainPage(){
    const navigate = useNavigate()
    // const [isPlay, setPlay] = useState(false)
    const [wh, setWh] = useState<Iwh>({
        width: '10%',
        height: '10%'
    })
    const onLogout = async () => {
        await localStorage.removeItem('token');
        navigate('/login')
    }
    const [singleMovie, setMovie] = useState<singleMovie>({
        id: 0,
        description: '',
        trailer: '',
        thumbnail: '',
    })
    const [movies, setMovies] = useState<IMovies[]>([{
        id: 0,
        description: '',
        trailer: '',
        thumbnail: '',
    }])
    const getMovie = async () => {
        axios.get('http://localhost/api/pdo/getMovie.php/3')
        .then(res => {
            console.log(res.data)
            setMovie(res.data)
        })
        .catch(err => console.log(err))
    }
    const getAllMovies = async () => {
        axios.get('http://localhost/api/pdo/getMovie.php')
        .then(res => {
            console.log(res.data)
            setMovies(res.data)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getMovie()
        getAllMovies()
    },[])
    return(
        <Box className='main-page'>
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
                    <Avatar sx={{ bgcolor: 'salmon', marginRight: '20px' }}>MT</Avatar>
                    <Button 
                        variant="contained" color="error"
                        onClick={onLogout}
                        className="disable-texttf"
                    >
                        Log-out
                    </Button>
                </Box>
            </Box>
            <Box className='main-banner'>
                <Box className='single-banner'>
                    <img src={singleMovie.thumbnail} alt="" />
                </Box>
                <Box className='control-bar'>
                    <p >{singleMovie.description}</p>
                    <Box sx={{marginRight: 'auto', width: '100px'}}> 
                    <Button 
                        variant='contained' 
                        className='play-btn disable-texttf'
                        startIcon={<PlayArrow />}
                        onClick={() => navigate('/3')}
                    >
                        Play
                    </Button>
                    </Box>
                </Box>
            </Box>
            <Box className='list-movies'>
                {movies.map((movie, index) => (
                    <Box key={index} className='single-box'>
                        <Box className='box-img'>
                            <img src={movie.thumbnail} alt="" />
                        </Box>
                        <Box className='play-bar'>
                            <Button
                                variant='contained' 
                                className='mini-play disable-texttf'
                                startIcon={<PlayArrow />}
                                onClick={() => navigate(`/${movie.id}`)}
                            >
                                Play
                            </Button>
                        </Box>
                    </Box>
                ))}
                
            </Box>
        </Box>
    )
}