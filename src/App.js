import './App.css';
import { Typography, TextField } from '@mui/material';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Auth from './components/Auth';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
