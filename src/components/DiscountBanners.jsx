import React from 'react';
import girl2 from '../assets/girl2.png';
import phone from '../assets/phone.png';
import nike from '../assets/nike.png';

const DiscountBanners = () => {
  return (
<section className="flex flex-row w-full h-full gap-4 md:flex-col">

      {/* Upper Banner */}
      <div className="relative w-full h-[200px] md:h-[50%] rounded-3xl overflow-hidden bg-gradient-to-r from-[#a5e9d1] to-[#e0f2e9]">
        <img
        draggable="false"
          src={girl2} // Replace with actual image path
          alt="Discount Image"
          className="absolute right-0 bottom-0 object-cover w-auto h-[80%] sm:h-[90%] md:h-[100%]"
          style={{ transform: 'translateY(10%)' }}

        />
        <img
        draggable="false"
          src={nike} // Replace with actual image path
          alt="Discount Image"
          className="absolute bottom-0 left-0 object-cover w-auto h-1/2 sm:h-3/5 md:h-4/5"
          style={{ transform: 'translateY(10%)' }}
        />
        <div className="absolute flex flex-col items-center p-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-lg font-semibold text-center text-black md:text-xl">GET UP TO 50% OFF</h1>
          <button className="h-10 px-4 py-2 mt-4 text-xs font-medium text-black bg-white border rounded-full shadow-lg w-28 bg-opacity-30 backdrop-blur-lg hover:backdrop-blur-sm hover:bg-opacity-50 border-white/40">
            Get Discount
          </button>
        </div>
      </div>

      {/* Lower Banner */}
      <div className="relative w-full h-[200px] md:h-[50%] rounded-3xl overflow-hidden bg-gradient-to-r from-[#fce998] to-[#f7edd1] group">
        <img
        draggable="false"
          src={phone}  // Replace with actual image path
          alt="Winter Weekend Image"
          className="absolute right-0 bottom-0 w-auto h-[120px] md:h-[150px] mr-4 md:mr-8"
        />

        <div className="absolute transform -translate-y-1/2 left-4 md:left-8 top-1/2">
          <h1 className="text-lg font-semibold text-black md:text-2xl">Winter’s Weekend</h1>
          <p className="py-1 text-xs text-black md:text-sm">Branded products</p>
        </div>
        
        <div className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full right-4 md:right-5 top-4 md:top-5">
          <span className="text-lg text-black">&#8599;</span> {/* Right-angled arrow */}
        </div>
        
        {/* Transparent Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-200 transform translate-y-full bg-black opacity-0 bg-opacity-60 group-hover:opacity-100 group-hover:translate-y-0">
          <h1 className="text-lg font-semibold text-white md:text-xl">Special Offer</h1>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanners;
