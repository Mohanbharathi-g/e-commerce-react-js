import React from 'react';

const Flex = ({ highlight, ifExists }) => {
  const { heading, text, title, btn, img, url } = highlight;
  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col lg:justify-items-center nike-container my-5 ${
          ifExists ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
          <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>
            {heading}
          </h1>
          <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>
            {title}
          </h1>
          <p className='xl:text-sm my-4 text-slate-900'>{text}</p>

          <a
            href={url}
            className='flex items-center
          '
            role='button'
            target={'blank'}
          >
            {' '}
            <button
              type='button'
              className='button-theme
              text-slate-100 bg-slate-900 shadow-slate-900 py-1.5'
            >
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img
            src={img}
            alt={title}
            className={`w-auto mt-5 object-fill transition-theme duration-700 ${
              ifExists
                ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12'
                : 'h-72 lg:h-64 md;h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Flex;
