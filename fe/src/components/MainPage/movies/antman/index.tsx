import ReactPlayer from 'react-player';
import  Box  from '@mui/material/Box';
export default function Antman(){
    return(
        <Box sx={{width: '100vw', height: '100vh'}}>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=ug7JuDFg9R0'
                width='100%'
                height='100%'
                controls={true}
            />
        </Box>
    )
}