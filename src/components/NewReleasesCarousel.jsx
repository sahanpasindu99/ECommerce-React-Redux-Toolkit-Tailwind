import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import girl from '../assets/girl.png';
import phone from '../assets/phone.png'
import gucci from '../assets/gucci.png'
import jbl from '../assets/jbl.png'
import nike from '../assets/nike.png'

const releases = [
  {
    title: "Iphone ",
    author: "Xavier Pope",
    price: "$1290.00",
    image:phone, // Replace with your actual image paths
    status:"new"
  },
  {
    title: "Nike Pegasus",
    author: "John Doe",
    price: "$27.99",
    image:  nike,
    status:"stock"
  },
  {
    title: "JBL Headphone",
    author: "Jane Smith",
    price: "$28.00",
    image:  jbl,
    status:"new"
  },
  {
    title: "Gucci Handbag",
    author: "Jane Smith",
    price: "$28.00",
    image:  gucci,
    status:"stock"
  },
  // Add more releases as needed
];

const NewReleasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? releases.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === releases.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Carousel Card */}
      <div className="bg-transparent p-6 rounded-lg  relative text-center justify-center items-center">
        <h2 className="text-xl font-bold text-[#463f77] mb-4">SHOP NOW</h2>
        <div className='flex items-center justify-center'>
        <img
          src={releases[currentIndex].image}
          alt={releases[currentIndex].title}
          className="w-auto h-48  mb-4 rounded-md"
        />
        </div>
        <h3 className="text-xl font-semibold text-gray-700">
          {releases[currentIndex].title}
        </h3>
        <p className="text-gray-500">{releases[currentIndex].author}</p>
        <p className="text-[#ef5bfabd] font-bold text-xl">{releases[currentIndex].price}</p>

        {/* Swipe Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#ef5bfae7] text-white p-2 rounded-full"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#ef5bfae7] text-white p-2 rounded-full"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewReleasesCarousel;
