import React,{useState,useEffect} from 'react';
import {Box, Button, TextField, OutlinedInput,Checkbox} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import {VisibilityOff, Visibility} from '@mui/icons-material';
import FormHelperText from '@mui/material/FormHelperText';
import  Link  from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../../commons/type';
import { header } from '../../commons/common';
import './login.css'
import { setTimeout } from 'timers/promises';
export default function HomePage() {
    const navigate = useNavigate()
    const [accessToken, setToken] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [error, setError] = useState<UserLogin>({
        username: undefined,
        password: undefined,
      });
    
    const [loginPayload, setLogin] = useState<UserLogin>({
        username: '',
        password: ''
    })
    const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost/api/pdo/userAuth.php', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
              username: loginPayload.username,
              password: loginPayload.password
            }),
          });
          console.log(response)
          alert('Sign-In Successfully!')
          if(response.status === 200){
            setToken('XpT7OoqccDKg8Oa14B5w')
            navigate('/main')
          } else {
            setToken('')
          }
        } catch (error) {
          console.error(error);
          alert('Error')
        } finally {
          setLoading(false);
        }
    }
    // ----------VALIDATION------------
    const validate = async () => {
        if(loginPayload.username === '' && loginPayload.password === '') {
          setError({username: 'username cannot be empty!', password: 'password is empty!'});
          return false;
        } else if(loginPayload.username === ''){
          setError({username: 'username cannot be empty!', password: undefined});
          return false;
        } else if(loginPayload.password === ''){
          setError({username: undefined, password: 'password is empty!'});
          return false; 
        } else {
          setError({username: undefined, password: undefined})
          return true
        }
      }
    const onSubmit = async () => {
        setLoading(true)
        await validate() ? handleSubmit() : setLoading(false)
    }

    useEffect(() => {
        localStorage.setItem('token', accessToken)
    },[])
    const [atoken, setTokenn] = useState<string | null>('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        setTokenn(token)
        if(token !== null){
            navigate('/main')
        }
    },[atoken])
    return (
        <Box className="main-login">
            <Box className="nav-bar-login">
                <Box className="logo-cont">
                    <Button 
                        className="logo"
                        onClick={() => navigate('/')}
                    >
                        MOVA
                    </Button>
                </Box>
            </Box>
            <Box className="body-login">
                <Box className="inner-body">
                    <p className='title-form'>Sign-In</p>
                    <form onSubmit={handleSubmit} className="form">
                        <Box className='input-box'>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" size='small'>
                            <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-username"
                                label="Username"
                                onChange={(e: any) => setLogin({...loginPayload, username: e.target.value})}
        
                            />
                        </FormControl>
                        </Box>
                        {error.username ? <FormHelperText sx={{color: 'red', marginRight: 'auto', fontStyle: 'italic'}}>{error.username}</FormHelperText> : undefined}
                        <Box className='input-box'>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" size='small'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={show ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShow(!show)}
                                    edge="end"
                                    >
                                    {show ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                onChange={(e: any) => setLogin({...loginPayload, password: e.target.value})}
        
                            />
                            {error.password ? <FormHelperText sx={{color: 'red', marginRight: 'auto', fontStyle: 'italic'}}>{error.password}</FormHelperText> : undefined}
                        </FormControl>
                        </Box>
                    </form>
                    <LoadingButton 
                        type='submit' 
                        variant='contained' color='error' className='submit-btn'
                        loading={loading}
                        onClick={onSubmit}
                    >
                        Sign In
                    </LoadingButton>
                    <Box sx={{marginRight: 'auto'}} width='50%'>
                        <FormControlLabel control={<Checkbox defaultChecked sx={{color: 'lightgrey'}}/>} label="Remember me" sx={{color: 'lightgrey'}}/>
                    </Box>
                    <Box sx={{width: '100%',height: '6rem',display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <span style={{color: 'grey', marginRight: '10px'}}>New to Mova?</span> 
                        <Link href='/register' sx={{color: 'white', cursor: 'pointer'}}>Sign up now.</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}