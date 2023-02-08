import React,{useState} from 'react';
import {Box, Button, TextField, OutlinedInput} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {VisibilityOff, Visibility} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { IRegister } from '../../commons/type';
import { header } from '../../commons/common';
import { toastStore } from '../../features/toast/toastReducer';
import './register.css'

export default function HomePage() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState('')
    const [show, setShow] = useState(false)
    const [registerPayload, setRegister] = useState<IRegister>({
        username: '',
        password: '',
        email: '',
        fullname: '',
        accessToken: 'XpT7OoqccDKg8Oa14B5w'
    })
    const checkUsername = async () => {
        try {
            const res = await fetch('http://localhost/api/pdo/checkUserName.php',{
                method: 'POST',
                headers: header,
                body: JSON.stringify({
                    username: registerPayload.username
                }),
            })
            if(res.status === 200){
                alert('ERROR: Username already exist!')
                return false
            } else if(check !== registerPayload.password){
                alert('Password does not match!')
                return false
            } else {
                return true
            }
        } catch (error){
            console.log(error)
            return false
        } finally {
            setLoading(false)
        }
    }
    const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost/api/pdo/register.php', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
              username: registerPayload.username,
              password: registerPayload.password,
              email: registerPayload.email,
              fullname: registerPayload.fullname,
              accessToken: registerPayload.accessToken
            }),
          });
          console.log(response)
          alert('Registered Successfully! Please Log-In')
        } catch (error) {
          console.error(error);
          alert('Error')
        } finally {
          setLoading(false);
        }
    };
    const onSubmit = async () => {
        setLoading(true)
        await checkUsername() ? handleSubmit() : setLoading(false)
    }
    return (
        <Box className='main-register'>
            <Box className="nav-bar-register">
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
                        variant="text" color="error"
                        onClick={() => navigate('/login')}
                        className="disable-texttf"
                    >
                        Sign-In
                    </Button>
                </Box>
            </Box>
            <Box className="body-register">
                <Box className="inner-body">
                    <p className='title-form'>REGISTER</p>
                    <form onSubmit={handleSubmit} className="form">
                        <TextField id="outlined-basic" label="FullName" variant="outlined"  size="small" className="textfield"
                            onChange={(e) => setRegister({...registerPayload, fullname: e.target.value})}/>
                        <TextField id="outlined-basic" label="Username" variant="outlined" size="small" className="textfield" 
                            onChange={(e) => setRegister({...registerPayload, username: e.target.value})}
                        />
                        <FormControl sx={{ m: 1, width: '70%' }} variant="outlined" size='small'>
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
                                onClick={(e: any) => setRegister({...registerPayload, password: e.target.value})}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '70%' }} variant="outlined" size='small'>
                            <InputLabel htmlFor="outlined-adornment-password">Re-type Password</InputLabel>
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
                                label="Re-type Password"
                                onClick={(e: any) => setCheck(e.target.value)}
                            />
                        </FormControl>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" className="textfield" 
                        onChange={(e) => setRegister({...registerPayload, email: e.target.value})}/>
                    
                    </form>
                    
                    <LoadingButton 
                        type='submit' 
                        variant='contained' color='error' className='submit-btn'
                        loading={loading}
                        onClick={onSubmit}
                    >
                        Create
                    </LoadingButton>
                    {/* <Button 
                        type='submit' 
                        variant='contained' color='error' className='submit-btn'
                        
                        onClick={onSubmit}
                    >
                        Create
                    </Button> */}
                </Box>
            </Box>
        </Box>
    )
}