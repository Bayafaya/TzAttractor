import React, { useContext, useEffect, useState } from "react";
import { AppBar, Avatar,  Box,  Button,  IconButton, Menu, MenuItem, Toolbar, Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";


function Header({ bar}) {
    const { user } = useContext(AuthContext);
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

   
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const linked = () => {
      setAnchorEl(null);
    };
  return (
    <AppBar position="static" sx={{bgcolor:"#5297ac",color:"black"}}> 
      <Toolbar>
      <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}

                onClose={handleClose}
              >
              <Link to='/profile' style={{textDecoration:'none',color:'inherit'}}> <MenuItem onClick={handleClose}>My account</MenuItem></Link>
              <Link to='/repos' style={{textDecoration:'none',color:'inherit'}}><MenuItem onClick={handleClose}>My Repositories</MenuItem></Link> 
              <Link to='/search' style={{textDecoration:'none',color:'inherit'}}><MenuItem onClick={handleClose}>Other Users</MenuItem></Link> 
              </Menu>
            </div>

          <Typography sx={{flexGrow:1}} variant='h6' component='div'>
               Main
          </Typography >
          <Avatar src={user.avatar_url} sx={{border:'2px solid teal'}}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
