import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/productSlice';
import Hero from '../components/Hero';
import Products from '../components/ProductCard';
import ChoicePage from './ChoicePage';
import Featured from '../components/Featured';

export const Home = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
      <section className="w-full px-0 py-10 mx-0">
        <Hero />
        <Featured />

        {/* Heading and View All Button */}
        <div className="flex flex-col items-start justify-between max-w-6xl px-4 mx-auto sm:flex-row sm:items-center">
          <h2 className="mx-2 text-2xl font-semibold">Big Save</h2>
          <button className="mt-2 text-black hover:underline sm:mt-0">View more</button>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center max-w-6xl gap-4 px-4 mx-auto mt-6 sm:gap-6">
          {data.slice(0, 4).map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 h-[500px]">
          <ChoicePage />
        </div>
      </section>
  );
};
