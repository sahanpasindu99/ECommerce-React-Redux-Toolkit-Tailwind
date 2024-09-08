import React from 'react';

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] flex items-center justify-center">
      <div className="relative w-full max-w-6xl p-8 bg-white rounded-lg W">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button className="text-sm text-gray-600">&lt; Back</button>
          <button className="text-lg">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Left Section - Product Images */}
          <div className="flex flex-col space-y-6 lg:w-1/2">
            <img
              src="https://via.placeholder.com/450"
              alt="Product"
              className="w-full h-auto mb-4"
            />
            <div className="flex space-x-4">
              {/* Thumbnail Images */}
              <img
                src="https://via.placeholder.com/80"
                alt="Thumbnail"
                className="w-20 h-20 border border-gray-300 rounded-md"
              />
              <img
                src="https://via.placeholder.com/80"
                alt="Thumbnail"
                className="w-20 h-20 border border-gray-300 rounded-md"
              />
              <div className="flex items-center justify-center w-20 h-20 text-gray-500 bg-gray-200 rounded-md">
                +3
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="space-y-6 lg:w-1/2">
            <h1 className="mb-2 text-4xl font-semibold text-gray-800">White technical knit fabric high-tops</h1>
            <p className="text-sm text-gray-500">Running sneakers with thin elastic laces.</p>

            {/* Size Selector */}
            <div className="flex items-center mb-4 space-x-4">
              <span className="text-sm text-gray-500">Size</span>
              <div className="flex space-x-2">
                <button className="flex items-center justify-center w-12 h-12 text-sm text-gray-800 border border-gray-300 rounded-full">37</button>
                <button className="flex items-center justify-center w-12 h-12 text-sm text-gray-800 border border-gray-300 rounded-full">38</button>
                <button className="flex items-center justify-center w-12 h-12 text-sm text-gray-800 border border-gray-300 rounded-full">39</button>
                <button className="flex items-center justify-center w-12 h-12 text-sm text-gray-800 border border-gray-300 rounded-full">40</button>
                <button className="flex items-center justify-center w-12 h-12 text-sm text-gray-800 border border-gray-300 rounded-full">41</button>
              </div>
            </div>

            {/* Price and Reviews */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Reviews</span>
                <div className="flex space-x-1">
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-gray-300 fas fa-star"></i>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">$450</span>
            </div>

            {/* Color Selector */}
            <div className="flex items-center mb-6 space-x-4">
              <span className="text-sm text-gray-500">Colour</span>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full"></button>
                <button className="w-8 h-8 bg-gray-300 border border-gray-400 rounded-full"></button>
                <button className="w-8 h-8 bg-yellow-400 rounded-full"></button>
                <button className="w-8 h-8 bg-blue-400 rounded-full"></button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between space-x-4">
              <button className="flex-1 py-4 font-semibold text-white bg-black rounded-full">
                Add to Cart
              </button>
              <button className="flex items-center justify-center w-12 h-12 text-gray-800 bg-white border border-gray-300 rounded-full">
                <i className="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Media Controls */}
        <div className="absolute bottom-0 left-0 flex items-center justify-between w-full p-6 bg-white shadow-lg">
          <div className="flex items-center space-x-4">
            <button className="text-sm font-semibold text-gray-800">Play Video</button>
            <div className="w-12 h-px bg-gray-300"></div>
            <button className="text-sm font-semibold text-gray-800">01 / 06</button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
