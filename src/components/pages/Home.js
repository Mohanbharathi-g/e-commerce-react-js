import React from 'react';
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/firebase';

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

import {
  setDocId,
  setUser,
  setImageAsset,
  setNumber,
  setAddress,
  selectUser,
  setName,
  setMail,
  setUserId,
} from '../../app/CartSlice';

import { query, collection, where, getDocs } from 'firebase/firestore';

import { db } from '../Firebase/firebase';

const Home = () => {
  const user = useSelector(selectUser);

  // const userId = useSelector(selectUserId);
  // console.log(userId);
  // console.log(user);
  // getting user profile
  const fetchUserDetails = async () => {
    if (user && user?.uid) {
      // console.log('hiii fetch');
      // console.log(user);

      const q = query(
        collection(db, 'user'),
        where('userUid', '==', user?.uid)
      );

      // console.log(user?.uid);

      // console.log(userId);

      console.log(q);
      const querySnapshot = await getDocs(q);

      // console.log(querySnapshot);

      querySnapshot.docs.map((doc) => {
        dispatch(setDocId(doc.id));
        // console.log(doc.id);
        const userData = doc.data();
        // console.log(userData);
        if (userData) {
          dispatch(setUserId(userData.userUid));
          dispatch(setName(userData.user));
          dispatch(setImageAsset(userData.image));
          dispatch(setMail(userData.email));
          dispatch(setNumber(userData.number));
          dispatch(setAddress(userData.address));
        }
        return doc.id;
      });
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log();
        dispatch(setUser({ ...currentUser }));
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchUserDetails();
  }, [user, user?.uid]);

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
