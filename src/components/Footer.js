import React from 'react';

const Footer = ({ footer: { links, titles } }) => {
  return (
    <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md;max-w-none md:gap-5'>
            {titles.map((title, i) => {
              return (
                <div key={i} className='grid items-center'>
                  <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>
                    {title.title}
                  </h1>
                </div>
              );
            })}

            {links.map((link, i) => {
              return (
                <ul key={i} className='grid items-center gap-1 '>
                  {link.map((list, i) => {
                    return (
                      <li key={i} className='text-sm sm:text-xs'>
                        {list.link}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className='grid items-center justify-center'>
          <p className='mt-7 text-slate-100'>
            Copyright©{' '}
            <span>
              all reserved rights{' '}
              <strong className='text-sky-100'>@Mohanbharathi</strong>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
