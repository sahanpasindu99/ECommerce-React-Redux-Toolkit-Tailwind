import React from 'react';
import girl from '../assets/girl.png';
import { FiSearch } from 'react-icons/fi';
import NewReleasesCarousel from './NewReleasesCarousel';
import DiscountBanners from './DiscountBanners';

const Hero = () => {
  return (
    <section className="flex justify-center min-h-full bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 bg-white mt-[36px] px-3 h-auto md:h-[400px]">
        {/* Left Div (2/3 width) */}
        <div className="w-full md:w-4/6 bg-[#f8f8fcf3] rounded-lg p-8 relative">
          {/* Egg Shape with Lumps (Right Shape) */}
          <div
            className="absolute bottom-1/2 right-0 w-44 h-44 bg-[#ef5bfa] rounded-full"
            style={{
              zIndex: 1,
              transform: 'translateX(50%) translateY(50%) rotate(-30deg)',
              marginRight: '6rem',
              marginBottom: '0.5rem',
            }}
          >
            {/* Add lumps */}
            <div
              className="absolute w-12 h-12 bg-[#d590da] rounded-full"
              style={{
                top: '20%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            <div
              className="absolute w-24 h-24 bg-purple-800 rounded-full"
              style={{
                bottom: '35%',
                right: '45%',
                transform: 'translate(50%, 50%)',
              }}
            ></div>
          </div>

          {/* Additional Shape (Middle Shape) */}
          <div
            className="absolute top-1/4 left-1/3 w-48 h-36 bg-[#ffb6e9] rounded-full"
            style={{
              zIndex: 1,
              transform: 'translateX(-50%) translateY(-50%) rotate(20deg)',
            }}
          ></div>

          {/* Additional Shape (Left Bottom Shape) */}
          <div
            className="absolute bottom-12 left-24 w-10 h-14 bg-[#ffcaef] rounded-full"
            style={{
              zIndex: 1,
              transform: 'translate(-50%, 50%) rotate(45deg)',
            }}
          ></div>
          <div
            className="absolute bottom-0 left-24 w-10 h-14 bg-[#ffcaef] rounded-full"
            style={{
              zIndex: 1,
              transform: 'translateX(-50%) translateY(-50%) rotate(-20deg)',
            }}
          ></div>

          {/* Content for the left section */}
          <div style={{ marginLeft: '20px', marginTop: '30px', zIndex: 10, position: 'relative' }}>
            <h1 className="text-4xl font-bold text-[#3b346b]">WELCOME TO</h1>
            <h1 className="text-5xl font-bold text-[#3b346b] mt-1">SHOPEELAND</h1>
            <p className="mt-5 text-md font-medium text-[#3b346b]">Explore our features and enjoy a unique experience.</p>

            <div className="relative mt-8 w-[320px]">
              <style>
                {`
                  .custom-placeholder::placeholder {
                    font-size: 14px;
                    margin-left: 0.8rem;
                    margin-bottom: 0.25rem;
                  }
                `}
              </style>
              <input
                type="text"
                placeholder="Search product by name or brand"
                className="w-full h-10 p-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#3b346b] focus:border-transparent custom-placeholder"
              />
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white bg-[#ef5bfa] hover:bg-[#e336f0] w-10 h-8 rounded-full">
                <FiSearch className="mt-2 ml-3 top-1/2 " />
              </div>
            </div>
          </div>

          {/* Girl Image */}
          {/* <img
            src={girl}
            alt="Girl"
            className="absolute right-0 bottom-0 w-auto h-[105%] object-contain"
            style={{ zIndex: 15 }}
          /> */}
            <img
            src={girl}
            alt="Girl"
            className=" right-[-6rem] absolute bottom-0 w-auto h-[80%] sm:h-[90%] md:h-[105%] object-contain"
            style={{ zIndex: 15 }}
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
