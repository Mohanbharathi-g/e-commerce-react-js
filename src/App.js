import React from 'react';

// custom css

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing spilder for card carousel
import '@splidejs/react-splide/css';
import Home from './components/pages/Home';

import SignUp from './components/pages/SignUp';
import AddProfile from './components/pages/AddProfile';

import SignIn from './components/pages/SignIn';
import Profile from './components/pages/Profile';
import AddingDetails from './components/pages/AddingDetails';
import History from './components/pages/History';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/AddProfile' element={<AddProfile />} />
        <Route path='/editprofile/:id' element={<AddProfile />} />
        <Route path='/addingDetails' element={<AddingDetails />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
