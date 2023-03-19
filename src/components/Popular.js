import React from 'react';
import Title from './Utlis/Title';

import Item from './Utlis/Item';

const Popular = ({ popularsales: { title, items }, ifExists }) => {
  // console.log(title, items);
  return (
    <>
      <div className='nike-container'>
        <Title title={title} />
        <div
          className={`grid  items-center justify-items-center mt-7 gap-7 lg:gap-5 ${
            ifExists
              ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
              : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
          }`}
        >
          {items.map((item, index) => {
            return <Item {...item} key={index} ifExists={ifExists} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
