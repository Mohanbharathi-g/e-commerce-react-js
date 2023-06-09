import React, { useState } from 'react';

import logo from '../../assets/product6.png';

import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import {
  setUser,
  setAddress,
  setMail,
  setName,
  setImageAsset,
  setNumber,
} from '../../app/CartSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const clearData = () => {
    dispatch(setName(null));

    dispatch(setMail(null));
    dispatch(setAddress(null));
    dispatch(setImageAsset(null));

    dispatch(setAddress(null));
    dispatch(setUser(null));
    dispatch(setNumber(null));
  };

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearData();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        navigate('/home');

        console.log(navigate);
      })
      .catch((err) => {
        if (err.code === 'auth/weak-password') {
          alert('its is weak password');
        } else if (err.code === 'auth/email-already-in-use') {
          alert('the mail is already in use');
        }
      });
  };
  return (
    <>
      <div className='container mx-auto'>
        <div className='w-full h-screen  bg-slate-900'>
          <div className='fixed w-full px-4 py-16 z-50 '>
            <div className='max-w-[450px] h-[600px] mx-auto bg-transparent text-slate-100  rounded-md bg-slate-100'>
              <div className='max-w-[320px] mx-auto py-16 px-2 md:px-0'>
                <div className='logo-login text-center '>
                  <img
                    src={logo}
                    alt='logo'
                    className='w-[100px] h-[100px] mx-auto rounded-xl '
                  />
                </div>
                <h1 className='text-3xl font-bold text-slate-100'>Sign Up</h1>

                <form
                  onSubmit={handleSubmit}
                  className='w-full flex flex-col py-4'
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3 my-2 bg-gray-700 rounded md:w-[70vw]'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    required
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 my-2 bg-gray-700 rounded md:w-[70vw]'
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    required
                  />
                  <button
                    type='submit'
                    className='bg-red-700 text-slate-100 py-3 my-6 rounded font-semibold hover: transition-all duration-300
                    md:w-[70vw]'
                  >
                    Sign Up
                  </button>
                  <div className=' flex justify-between items-center font-medium mb-3 text-gray-400'>
                    <p className='mr-2'>
                      {' '}
                      <input type='checkbox' /> Remember me ?
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <p>
                    <span className='text-gray-100'>
                      Already have an account ?
                    </span>
                    <NavLink className='text-blue-500' to='/signin'>
                      {' '}
                      Sign In
                    </NavLink>{' '}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
