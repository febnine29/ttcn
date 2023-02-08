import ReactPlayer from 'react-player';
import  Box  from '@mui/material/Box';
export default function Panther(){
    return(
        <Box sx={{width: '100vw', height: '100vh'}}>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=_Z3QKkl1WyM'
                width='100%'
                height='100%'
                controls={true}
            />
        </Box>
    )
}