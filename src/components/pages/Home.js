import React from 'react';

// importing components
import Hero from '../Hero';
import Popular from '../Popular';
import Flex from '../Flex';
import Stories from '../Stories';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Cart from '../Cart';

import { heroapi } from '../../data/data';

// importing data

// import { heroapi } from './data/data';

import { popularsales } from '../../data/data';
import { toprateslaes } from '../../data/data';

import { highlight, sneaker, story, footerAPI } from '../../data/data';

const Home = () => {
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

export default Home;
