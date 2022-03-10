import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
  Avatar,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../constants/actionTypes';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [getCurrentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  console.log(new Date().getTime());

  // console.log(getCurrentUser?.token);
  // console.log(decode(getCurrentUser?.token));
  useEffect(() => {
    // const token = getCurrentUser?.token;
    // if (token) {
    // const decodedToken = decode(token)
    //decode token
    // }
    setCurrentUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              color={'inherit'}
              sx={{ textDecoration: 'none' }}
            >
              JsonWebToken
            </Typography>
          </Box>
          {getCurrentUser?.result ? (
            <>
              <Avatar>
                {getCurrentUser.result.name.charAt(0).toUpperCase()}
              </Avatar>
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="contained" component={Link} to="/auth">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
