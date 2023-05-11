import React from 'react';
import Navbar from '../Navbar';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profile from '../../assets/photo-1511367461989-f85a21fda167.jpg';

import { useSelector } from 'react-redux';

import { AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import {
  selectName,
  selectMail,
  selectNumber,
  selectImage,
  selectUser,
  selectAddress,
  selectUserId,
} from '../../app/CartSlice';

const Profile = () => {
  // const navigate = useNavigate();
  const imageAsset = useSelector(selectImage);
  const name = useSelector(selectName);

  const mail = useSelector(selectMail);

  const number = useSelector(selectNumber);

  const address = useSelector(selectAddress);

  const userUid = useSelector(selectUserId);

  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      <div className='bg-slate-800 w-full h-full flex flex-col min-h-screen justify-center items-center text-white'>
        <div
          className='bg-slate-900/50 rounded-lg p-6 sm:w-[450px] flex flex-col gap-y-8 lg:mt-16 md:mt-24 mt-36 mb-4 w-[500px]
           md:mb-0 w-[790px]
           xsm:w-[350px] p-10 '
        >
          {user && user.uid === userUid ? (
            <>
              <div className='-mt-16'>
                <img
                  src={`${imageAsset ? imageAsset : profile}`}
                  alt='profile'
                  className='w-[100px] h-[100px] rounded-full mx-auto'
                />
              </div>
              <div className='text-center'>
                <p className='mb-2'>Name :</p>
                <h2 className='text-center text-lg font-medium bg-black/25 px-2 py-1 rounded-md capitalize inline'>
                  {name}
                </h2>
              </div>
              <div className='flex flex-col gap-y-5 sm:flex-row sm:justify-between lg:items-center'>
                <div>
                  <p className='mb-4 pl-2'>Email :</p>
                  <p className='text-center bg-black/25 px-2 py-2 rounded-md inline'>
                    {mail}
                  </p>
                </div>
                <div>
                  <p className='mb-4 pl-2'>Number :</p>
                  <p className='text-center bg-black/25 px-2 py-2 rounded-md inline'>
                    {number}
                  </p>
                </div>
              </div>
              <div>
                <p className='mb-2 pl-2'>Address :</p>
                <p className='bg-black/25 px-3 py-2 rounded-md'>{address}</p>
              </div>
              <div className='flex justify-between items-center'>
                <Link to={`/editprofile/${user}`}>
                  <button
                    type='button'
                    className='bg-blue-700 inline-flex py-2 px-3 gap-2 rounded-lg hover:bg-blue-800 transition-all duration-200'
                  >
                    Edit <AiFillEdit />
                  </button>
                </Link>
                <Link to={'/home'}>
                  <button
                    className='bg-blue-700 inline-flex py-2 px-3 gap-2 rounded-lg hover:bg-blue-800 transition-all duration-200'
                    type='button'
                  >
                    Done <MdDone />
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className='-mt-16'>
                <img
                  src={`${imageAsset ? imageAsset : profile}`}
                  alt='profile'
                  className='w-[100px] h-[100px] rounded-full mx-auto'
                />
              </div>
              <div className='text-center'>
                <p className='mb-2'>Name :</p>
                <h2 className='text-center text-lg font-medium bg-black/25 px-2 py-1 rounded-md w-[65%] mx-auto text-gray-500'>
                  nill
                </h2>
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='mb-4 pl-2'>Email :</p>
                  <p className='text-center bg-black/25 px-2 py-2 pr-32 rounded-md inline text-gray-500'>
                    nill
                  </p>
                </div>
                <div>
                  <p className='mb-4 pl-2'>Number :</p>
                  <p className='text-center bg-black/25 px-2 pr-32 py-2 rounded-md inline text-gray-500'>
                    nill
                  </p>
                </div>
              </div>
              <div>
                <p className='mb-2 pl-2'>Address :</p>
                <p className='bg-black/25 px-3 py-2 pb-16 rounded-md text-gray-500'>
                  nill
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <Link to={`/addprofile`}>
                  <button
                    className='bg-blue-700 inline-flex py-2 px-3 gap-2 rounded-lg hover:bg-blue-800 transition-all duration-200'
                    type='button'
                  >
                    Add Profile <AiFillEdit />
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
