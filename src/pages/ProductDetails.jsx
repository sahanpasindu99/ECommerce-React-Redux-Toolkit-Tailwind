import React, { useState } from 'react';
import nike1 from '../assets/nike.png';
import nike2 from '../assets/gucci.png';
import nike3 from '../assets/phone.png';

const ProductDetails = () => {
  const sizes = [7, 8, 9, 10, 11]; // Example sizes
  const colors = ['#FF0000', '#0000FF', '#00FF00']; // Example colors
  const imageOptions = [nike1, nike2, nike3]; // Array of images

  // Set initial main image to the first index (nike2)
  const [mainImage, setMainImage] = useState(imageOptions[1]);
  const [selectedIndex, setSelectedIndex] = useState(1); // Track the selected image index

  return (
    <div className="flex items-center justify-center max-w-6xl min-h-[700px] md:min-h-[520px] p-4 mx-auto lg:px-0">
      {/* Left Div: Back Button, Title, Description */}
      <div className="flex flex-col w-full px-2 mb-8 md:mb-0 md:flex-row md:px-0">
        <div className="flex flex-col flex-1 ml-4 space-y-8">
          <button className="flex justify-start font-semibold text-gray-500">{'<'} Back</button>
          <h1 className="!mt-8 text-3xl font-bold">Product Title</h1>
          <p className="!mt-4 font-semibold text-gray-500">
            This is a brief description of the product, highlighting its key features.
          </p>

          {/* Custom Image Component */}
          <div className="flex mt-4 space-x-4">
            {imageOptions.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Option ${index + 1}`}
                className={`object-cover  w-16 h-16 border cursor-pointer rounded-[5px] transition-all ${
                  selectedIndex === index
                    ? 'ring-2 ring-indigo-500' // Add ring to the selected image
                    : 'border-transparent hover:border-gray-500'
                }`}
                onClick={() => {
                  setMainImage(image);
                  setSelectedIndex(index); // Update the selected index
                }}
              />
            ))}
          </div>
        </div>

        {/* Middle Div: Main Image */}
        <div className="flex items-center justify-center flex-2 ">
          <img
            src={mainImage}
            alt="Nike Product"
            className="object-contain mt-6 mb-6 transition-transform duration-300 transform w-96 h-96 hover:scale-105" // Default height and width
          />
        </div>

        {/* Right Div: Sizes, Reviews, Price, Colors */}
        <div className="flex flex-col flex-1 ml-4 md:items-center">
          <div className="relative space-y-4 md:top-6 ">
            <h2 className="text-xl font-semibold">Size</h2>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                  {size}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between !mt-6">
              <h2 className="font-semibold text-md">Reviews</h2>
              <p className="text-gray-600 pt-3/4">4.5/5 (120 reviews)</p>
            </div>

            <div className="flex items-center justify-between !mt-4">
              <h2 className="font-semibold text-md">Price</h2>
              <p className="text-xl font-bold">$149.99</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Available Colors</h2>
              <div className="flex mt-2 space-x-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 border rounded-full hover:border-4 hover:!border-gray-800"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
