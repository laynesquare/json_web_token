import { Typography, Box, Paper, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, getCount } from '../actions/count';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleClick = () => {
    const userIdWhoAdds = JSON.parse(localStorage.getItem('profile'))?.result
      ?._id;
    dispatch(add({ userIdWhoAdds: userIdWhoAdds }));
  };

  const handleReset = () => {};

  useEffect(() => {
    dispatch(getCount());
  }, [Location]);

  return (
    <Box className="App-header">
      <Typography variant="h1">Home</Typography>
      <Typography variant="h2">{count}</Typography>

      <Button size="large" onClick={handleClick}>
        PLUS 1
      </Button>
      <Button onClick={handleReset}>CLEAR</Button>
    </Box>
  );
};

export default Home;
