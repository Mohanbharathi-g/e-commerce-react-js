import React from 'react';
import Clip from './Utlis/Clip';
import SocialLink from './Utlis/SocialLink';

const Hero = ({
  heroapi: { btntext, sociallinks, subtitle, title, img, videos },
}) => {
  // console.log(videos);
  return (
    <>
      <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10 '></div>
        <div className=' relative  opacity-100 grid items-center justify-items-center nike-container z-20'>
          <div className='grid items-center justify-center mt-28 md:mt-24 z-20'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200 '>
              {title}
            </h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200 '>
              {subtitle}
            </h1>
            <button
              type='button'
              className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5 z-20 md:w-60 m-auto mb-5  '
            >
              {btntext}
            </button>
          </div>
          <div className='grid items-center gap-5 absolute top-[37vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
            {videos?.map((video, index) => {
              return (
                <Clip key={index} imgsrc={video.imgsrc} clip={video.clip} />
              );
            })}
          </div>
          <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3 '>
            {sociallinks?.map((icon, index) => {
              return <SocialLink key={index} icon={icon.icon} />;
            })}
          </div>
          <div className='flex items-center'>
            <img
              src={img}
              alt='hero-img'
              className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm;h-[21vh] xsm:h-[19vh] transition-theme -rotate-[25deg] duration-500 

hover:rotate-0 cursor-pointer object-fill '
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
