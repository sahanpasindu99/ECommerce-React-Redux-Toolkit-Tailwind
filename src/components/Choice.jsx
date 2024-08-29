import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import shoppingcart from '../assets/shopping-cart.png';  // Replace with your image

const Choice = () => {
  return (
    <div className="mx-auto relative overflow-hidden w-[230px] p-6 bg-gradient-to-tl from-[#fade63] to-[#fcecc2] rounded-3xl shadow-lg flex flex-col justify-between items-start">
      
      {/* Left Arrow Navigation */}
      {/* <div className="absolute left-[-20px] top-[40%]">
        <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md">
          <FiChevronLeft className="text-xl text-gray-600" />
        </button>
      </div> */}

      {/* Free Shipping Text */}
      <div className="z-10 mt-2">
        <p className="flex items-center font-semibold text-black">
          <span className="mr-2">
            {/* Icon for shipping */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h1l3 9h8l3-9h1M5 12l1-3h12l1 3M8 12h8M10 5h4M6 5h.01M18 5h.01" />
            </svg>
          </span>
          Free shipping over LKR 3099
        </p>
        <a href="/" className="block mt-2 text-sm text-yellow-500 underline hover:underline">
          Learn more
        </a>
      </div>

      {/* Image */}
      <div className="absolute bottom-0 right-0 w-full">
        <img src={shoppingcart} alt="Free Shipping" className="object-contain w-full  h-28 md:h-56" />
      </div>
    </div>
  );
};

export default Choice;
