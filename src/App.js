import React from 'react';

// custom css

import './index.css';

// importing components
import Hero from './components/Hero';
import Popular from './components/Popular';
import Flex from './components/Flex';
import Stories from './components/Stories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

// importing data

import { heroapi } from './data/data';

import { popularsales } from './data/data';
import { toprateslaes } from './data/data';

import { highlight, sneaker, story, footerAPI } from './data/data';

// importing spilder for card carousel
import '@splidejs/react-splide/css';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />

      <main>
        <Hero heroapi={heroapi} />
        <Popular popularsales={popularsales} ifExists />
        <Flex highlight={highlight} ifExists />
        <Popular popularsales={toprateslaes} />
        <Flex highlight={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footer={footerAPI} />
    </>
  );
};

export default App;
