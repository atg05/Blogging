import {AppBar,Toolbar,Typography} from '@mui/material';



const Header=()=>{
    
    return(
        <AppBar >
            <Toolbar >
                <Typography>Home &nbsp; </Typography>
                <Typography>About &nbsp; </Typography>
                <Typography>Contact &nbsp;</Typography>
                <Typography>Login &nbsp;</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;