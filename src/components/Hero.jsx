import React from 'react';
import girl from '../assets/girl.png';
import { FiSearch } from 'react-icons/fi';
import NewReleasesCarousel from './NewReleasesCarousel';
import DiscountBanners from './DiscountBanners';

const Hero = () => {
  return (
    <section className="flex justify-center min-h-full overflow-hidden bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 bg-white mt-[10px] px-3 h-auto md:h-[400px]">
        {/* Left Div (2/3 width) */}
        <div className="w-full md:w-4/6 bg-[#f8f8fcf3] rounded-lg p-8 relative overflow-hidden">
      {/* Radiant light effect from right bottom */}
      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#ef5bfa]/50 to-transparent blur-[150px] md:blur-[150px]"
        style={{ zIndex: 0 }}
      ></div>

      {/* Egg Shape with Lumps (Right Shape) */}
      <div
        className="absolute bottom-1/2 right-0 w-36 h-36 md:w-60 md:h-56 blur-[60px] bg-[#ef5bfa]/80 rounded-full "
        style={{
          zIndex: 1,
          transform: 'translateX(50%) translateY(50%) rotate(-30deg)',
        }}
      >
        {/* Lumps */}
        <div
          className="absolute w-8 h-8 md:w-12 md:h-12  bg-[#d590da]/80  rounded-full"
          style={{
            top: '20%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full  blur-[20px] bg-purple-800/50 md:w-24 md:h-24"
          style={{
            bottom: '35%',
            right: '45%',
            transform: 'translate(50%, 50%)',
          }}
        ></div>
      </div>

      {/* Additional Shape (Middle Shape) */}
      <div
        className="absolute top-1/4 left-1/3 w-36 h-28 md:w-48 md:h-36  bg-[#ffb6e9]/90 rounded-full "
        style={{
          zIndex: 1,
          transform: 'translateX(-50%) translateY(-50%) rotate(20deg)',
        }}
      ></div>

      {/* Additional Shape (Left Bottom Shape) */}
      <div
        className="absolute bottom-12 left-16 w-8 h-12 md:w-10 md:h-14 bg-[#ffcaef]/40 rounded-full"
        style={{
          zIndex: 1,
          transform: 'translate(-50%, 50%) rotate(45deg)',
        }}
      ></div>
      <div
        className="absolute bottom-0 left-16 w-8 h-12 md:w-10 md:h-14 bg-[#ffcaef]/40 rounded-full "
        style={{
          zIndex: 1,
          transform: 'translateX(-50%) translateY(-50%) rotate(-20deg)',
        }}
      ></div>

      {/* Content Section */}
      <div style={{ marginLeft: '20px', marginTop: '30px', zIndex: 10, position: 'relative' }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3b346b]">WELCOME TO</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b346b] mt-1">SHOPEELAND</h1>
        <p className="mt-5 text-xs sm:text-sm md:text-md font-medium text-[#3b346b]">
          Explore our features and enjoy a unique experience.
        </p>

        <div className="relative mt-8 w-full md:w-[320px]">
          <input
            type="text"
            placeholder="Search product by name or brand"
            className="w-full h-10 p-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#3b346b] focus:border-transparent"
          />
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white bg-[#ef5bfa] hover:bg-[#e336f0] w-8 h-8 md:w-10 md:h-8 rounded-full">
            <FiSearch className="mt-1.5 md:mt-2 ml-2 md:ml-3" />
          </div>
        </div>
      </div>

      {/* Girl Image */}
      <img
        draggable="false"
        src={girl}
        alt="Girl"
        className="absolute right-[-6rem] md:right-[-4rem] bottom-0 w-auto h-[90%] sm:h-[95%] md:h-[105%] object-contain z-[5]"
      />
    </div>

        {/* Right Div (1/3 width) */}
        <div className="flex items-center justify-center w-full rounded-lg md:w-2/6">
          <DiscountBanners />
        </div>
      </div>
    </section>
  );
};

export default Hero;
