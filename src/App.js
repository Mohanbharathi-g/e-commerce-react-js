import React from 'react';

// custom css

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing spilder for card carousel
import '@splidejs/react-splide/css';
import Home from './components/pages/Home';
// import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';

import SignIn from './components/pages/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
