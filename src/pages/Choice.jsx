import React from 'react';
import NewItemsSlider from '../components/NewItemsSlider';

const Choice = () => {
  return (
     <section className='section'>
      <div className='container max-w-5xl mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* <div className='flex mb-6 md:flex-col items baseline gap-x-6 lg:mb-0'>
            <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>{title}</h2>
            <p className='max-w-[245px] lg:mb-12'>{subtitle}</p>
            <div className='items-center hidden lg:flex'>
              <a className='font-medium transition-all hover:border-b border-primary lg:items-center' href='#'>{link}</a>
              <div className='text-3xl'>{icon}</div>
            </div>
          </div> */}
          {/* <div className='lg:max-w-[800px]  xl:max-w-[990px] lg:pl-2 lg:pr-1 lg:-right-26'> */}
          <div className='max-w-5xl lg:pl-2 lg:pr-1 lg:-right-26'>
          <NewItemsSlider/>
          </div>
       
        </div>

      </div>
     </section>
  );
};

export default Choice;
