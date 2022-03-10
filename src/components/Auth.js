import { useState } from 'react';
import {
  Typography,
  TextField,
  Box,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { AUTH } from '../constants/actionTypes';
import InputCustomized from './InputCustomized';
import { signup, signin } from '../actions/auth';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isSignup, setIsSignup] = useState(false);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = async (error) => {
    console.log(error);
    console.log('google login failed');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // signup
      dispatch(signup(formData, navigate));
    } else {
      // sign in
      dispatch(signin(formData, navigate));
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Paper>
        <Box className="App-header">
          {isSignup && (
            <InputCustomized
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              handleChange={handleChange}
            />
          )}

          <InputCustomized
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
          />
          <InputCustomized
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            handleChange={handleChange}
          />
          <Button type="submit" variant="contained">
            {isSignup ? 'Signup' : 'Login'}
          </Button>

          <GoogleLogin
            clientId="71023974194-lltnsekqum7mi1kff391bgt49g7c5uu8.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                color="primary"
                variant="contained"
              >
                Login with Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Button
            variant="text"
            onClick={() => {
              setIsSignup(!isSignup);
              setFormData(initialState);
            }}
          >
            {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </Paper>
    </form>
  );
};

export default Auth;
