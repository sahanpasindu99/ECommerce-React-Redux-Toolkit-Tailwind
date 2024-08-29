import React from 'react';
import { FiShoppingBag, FiStar, FiClock, FiHeadphones, FiBook, FiTag, FiUsers } from 'react-icons/fi';

const Featured = () => {
  const categories = [
    { icon: <FiShoppingBag size={40} />, title: 'Best Seller' },
    { icon: <FiStar size={40} />, title: 'New Release' },
    { icon: <FiClock size={40} />, title: 'Coming Soon' },
    { icon: <FiHeadphones size={40} />, title: 'Music' },
    { icon: <FiUsers size={40} />, title: 'Fashion' },
    { icon: <FiTag size={40} />, title: 'Garden' }
  ];

  return (
    <section className="flex justify-center w-full py-8 bg-white">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-[#4b2072] text-white rounded-lg flex flex-col items-center p-6 text-center hover:scale-105 transform transition-all duration-200">
            <div className="mb-4 text-[#f398db]">{category.icon}</div>
            <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
            <p className="text-sm text-[#f398db]">More &gt;</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
