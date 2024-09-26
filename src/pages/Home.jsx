import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/productSlice';
import Hero from '../components/Hero';
import Products from '../components/ProductCard';
import ChoicePage from './ChoicePage';
import Featured from '../components/Featured';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import StatusCode from '../utils/Status';
import FeatureIphone from '../components/FeatureIphone';

export const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="w-full px-0 py-10 mx-0">
      <Hero />
      <Featured />
      <FeatureIphone/>

      {/* Heading and View All Button */}
      <div className="flex flex-col items-start justify-between max-w-6xl px-4 pt-12 mx-auto sm:flex-row sm:items-center">
        <h2 className="mx-2 text-2xl font-semibold">Big Save</h2>
        <button className="mt-2 text-black hover:underline sm:mt-0">View more</button>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center max-w-6xl gap-4 px-4 mx-auto mt-6 sm:gap-6">
        {status === StatusCode.LOADING ? (
          Array(4).fill(0).map((_, index) => (
            <div key={index} className="w-[225px] p-4 rounded-3xl shadow-lg mb-12">
              <Skeleton height={148} width="100%" borderRadius={12} />
              <div className="mt-4 text-center">
                <Skeleton width="50%" height={12} />
                <Skeleton width="80%" height={20} style={{ marginTop: 4 }} />
                <div className="flex items-center justify-center mt-4 mb-4 space-x-1">
                  {Array(5).fill(0).map((_, index) => (
                    <Skeleton key={index} circle={true} height={14} width={14} />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Skeleton circle={true} height={40} width={40} />
                  <Skeleton width={80} height={40} borderRadius={20} />
                </div>
              </div>
            </div>
          ))
        ) : (
          data.slice(0, 4).map((product) => (
            <Products key={product.id} product={product} />
          ))
        )}
      </div>

      <div className="flex items-center justify-center mt-10 h-[500px]">
        <ChoicePage />
      </div>
    </section>
  );
};
