import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../components/ProductCard'; // Assuming this is your ProductCard component
import choiceicon from '../assets/choice.webp';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import StatusCode from '../utils/Status';
import { getProducts } from '../store/productSlice';



const ChoicePage = () => {
  const carouselRef = useRef(null);
  const dispatch=useDispatch();
  const {data,status}=useSelector(state=>state.products);//get data from store products

  useEffect(() => {
    dispatch(getProducts());
    // fetch('/products.json') // Assuming products.json is in the public folder
    //   .then(response => response.json())
    //   .then(data => {
    //     setItems(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching products:', error);
    //   });
  },[])

  // if(status===StatusCode.LOADING){
  //   return <p>... </p>
  // }
   
  // if(status===StatusCode.ERROR){
  //   return <p>Something went wrong</p>
  // }
   

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <section className="w-full h-auto my-8 flex justify-center  bg-gradient-to-tl from-[#dfbe2aec] to-[#f7edd1]">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 mt-8 mb-6">
          <div className="flex items-center gap-4 ">
            <img src={choiceicon} alt="choice" className="w-auto h-7 " />
            <h2 className="text-xl italic font-semibold text-red-600">
              Better services and selected items on Choice
            </h2>
          </div>
          <button className="text-black hover:underline">View more</button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-lg top-1/2 hover:bg-gray-200"
          >
            <FaChevronLeft className='my-4'/>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-lg top-1/2 hover:bg-gray-200"
          >
            <FaChevronRight className='my-4'/>
          </button>

          {/* Products */}
          <div
            ref={carouselRef}
            className="flex px-2 mb-4 ml-2 -space-x-4 overflow-hidden flex-wrap:nowrap"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {data.slice(4,10).map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full px-2 mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoicePage;
