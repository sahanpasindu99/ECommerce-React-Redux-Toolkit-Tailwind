import React from 'react';
import girl2 from '../assets/girl2.png';
import phone from '../assets/phone.png';
import nike from '../assets/nike.png';

const DiscountBanners = () => {
  return (
<section className="w-full h-full flex flex-row md:flex-col gap-4">

      {/* Upper Banner */}
      <div className="relative w-full h-[200px] md:h-[50%] rounded-3xl overflow-hidden bg-gradient-to-r from-[#a5e9d1] to-[#e0f2e9]">
        <img
          src={girl2} // Replace with actual image path
          alt="Discount Image"
          className="absolute right-0 bottom-0 w-auto h-full object-cover"
        />
        <img
          src={nike} // Replace with actual image path
          alt="Discount Image"
          className="absolute left-0 bottom-0 w-auto h-3/4 object-cover"
          style={{ transform: 'translateY(30%)' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-4">
          <h1 className="text-lg md:text-xl font-semibold text-black text-center">GET UP TO 50% OFF</h1>
          <button className="mt-4 w-28 h-10 px-4 py-2 bg-white bg-opacity-30 text-xs text-black font-medium rounded-full shadow-lg backdrop-blur-lg border hover:backdrop-blur-sm hover:bg-opacity-50 border-white/40">
            Get Discount
          </button>
        </div>
      </div>

      {/* Lower Banner */}
      <div className="relative w-full h-[200px] md:h-[50%] rounded-3xl overflow-hidden bg-gradient-to-r from-[#fce998] to-[#f7edd1] group">
        <img
          src={phone}  // Replace with actual image path
          alt="Winter Weekend Image"
          className="absolute right-0 bottom-0 w-auto h-[120px] md:h-[150px] mr-4 md:mr-8"
        />

        <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
          <h1 className="text-lg md:text-2xl font-semibold text-black">Winter’s Weekend</h1>
          <p className="text-xs md:text-sm py-1 text-black">Branded products</p>
        </div>
        
        <div className="absolute right-4 md:right-5 top-4 md:top-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-black text-lg">&#8599;</span> {/* Right-angled arrow */}
        </div>
        
        {/* Transparent Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-full group-hover:translate-y-0 flex items-center justify-center">
          <h1 className="text-white text-lg md:text-xl font-semibold">Special Offer</h1>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanners;
