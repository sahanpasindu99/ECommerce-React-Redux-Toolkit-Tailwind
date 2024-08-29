import React from 'react'
import { useState,useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/Status';
import Hero from '../components/Hero';
import Products from '../components/ProductCard'
import Choice from '../components/Choice';
import ChoicePage from './ChoicePage';
import Footer from '../components/Footer';
import Featured from '../components/Featured';

export const Home = () => {

  const [items,setItems]=useState([]);
  const dispatch=useDispatch();
  const {data,status}=useSelector(state=>state.products);//get data from store products

  useEffect(() => {
    dispatch(getProducts());
    // fetch(products) // Assuming products.json is in the public folder
    //   .then(response => response.json())
    //   .then(data => {
    //     setItems(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching products:', error);
    //   });
  },[]);

  // if(status===StatusCode.LOADING){
  //   return <p>... </p>
  // }
   
  // if(status===StatusCode.ERROR){
  //   return <p>Something went wrong</p>
  // }
   
  return (
    <>
     {/* <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
    {data.map(product => (
      <Products key={product.id} product={product} /> // Pass product data as props
    ))}
  </div> */}
  <Hero/>
  <Featured/>
 <section className="w-full py-10">
  {/* Heading and View All Button */}
  <div className="flex items-center justify-between max-w-6xl px-4 mx-auto">
    <h2 className="mx-2 text-2xl font-semibold">Big Save</h2>
    <button className="text-black hover:underline">View more</button>
  </div>

  {/* Products Grid */}
  <div className="flex flex-wrap justify-center max-w-6xl gap-6 mx-auto mt-6">
  {data.slice(0,4).map(product => (
      <Products key={product.id} product={product} /> // Pass product data as props
    ))}
    {/* <Choice />
    <Products />
    <Products />
    <Products /> */}
  </div>
</section>
<ChoicePage/>   
  </>
   
  )
}
