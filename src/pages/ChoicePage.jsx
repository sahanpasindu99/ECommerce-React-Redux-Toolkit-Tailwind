import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';
import NewItemsSlider from '../components/NewItemsSlider'; 
import choice from '../assets/choice.webp'

const ChoicePage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className='flex justify-center w-full h-auto max-w-6xl my-8'>
       
      <div className='container mx-auto'>
      <div className="flex flex-col items-start justify-between w-full px-4 mx-auto mb-8 overflow-hidden sm:flex-row sm:items-center">
          {/* <h2 className="mx-2 text-2xl font-semibold">Big Save</h2> */}
       <div className='mb-4'>
       <img src={choice} className='h-[40px] w-auto '/>
<h2 className='text-lg font-bold text-red-500'> Save more than 70% with free shipping</h2>
       </div>
          <button className="mt-2 text-black hover:underline sm:mt-0">View more</button>
        </div>
        <div className='w-full pl-4 overflow-hidden'>
            <NewItemsSlider products={data.slice(4, 10)} />

        </div>
      </div>
    </section>
  );
};

export default ChoicePage;
