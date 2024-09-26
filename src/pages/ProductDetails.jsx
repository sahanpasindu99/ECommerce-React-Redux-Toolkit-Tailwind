import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { product } from '../../public/product';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams(); // Get the id from the URL params
  const productId = parseInt(id, 10); // Convert the id to a number (since your ids are numbers)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Find the product by id
  const selectedProduct = product.find((p) => p.id === productId);

  // If no product is found, display a fallback message
  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { name, images, price, rating, sold, qty,description } = selectedProduct;
  const sizes = [7, 8, 9, 10, 11]; // Example sizes
  const colors = ['#4B0082', '#006400', '#0B0B0B']; // Dark purple, Dark green, Space black
  const [mainImage, setMainImage] = useState(images[0]); // Set the first image as the main image
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected image index

  // Handle image selection
  const handleImageClick = (index) => {
    setMainImage(images[index]);
    setSelectedIndex(index);
  };

  return (
    <div className="flex items-center justify-center max-w-6xl min-h-[700px] md:min-h-[520px] p-4 mx-auto lg:px-0">
      {/* Left Div: Back Button, Title, Description */}
      <div className="flex flex-col w-full px-2 mb-8 md:mb-0 md:flex-row md:px-0">
        <div className="flex flex-col flex-1 ml-4 space-y-8">
          <button  className="flex justify-start font-semibold text-gray-500 hover:text-black"><Link to='/'>{'<'} Back</Link></button>
          <h1 className="!mt-8 text-black/80 text-3xl font-bold">{name}</h1>
          <p className="!mt-4 font-regular text-gray-500">
{description}          </p>

          {/* Image Thumbnails */}
          <div className="flex mt-4 space-x-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`object-cover w-20 h-20 border cursor-pointer rounded-[5px] ${selectedIndex === index ? 'border-2 border-blue-700' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Middle Div: Main Image */}
        <div className="flex items-center justify-center flex-2">
          <img
            src={mainImage}
            alt={name}
            className="object-contain mt-6 mb-6 transition-transform duration-300 transform w-96 h-96 hover:scale-105"
          />
        </div>

        {/* Right Div: Sizes, Reviews, Price, Colors */}
        <div className="flex flex-col flex-1 ml-4 md:items-center">
          <div className="relative space-y-4 md:top-6">
            {/* <h2 className="text-xl font-semibold">Size</h2>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                  {size}
                </div>
              ))}
            </div> */}

            <div className="flex items-center  space-x-14 justify-between !mt-6">
              <h2 className="font-semibold text-md">Sold</h2>
              <p className="text-gray-600 pt-3/4">{rating}/5 ({sold} sold)</p>
            </div>

            <div className="flex items-center space-x-14 justify-between !mt-4">
              <h2 className="font-semibold text-md">Price</h2>
              <p className="text-xl font-bold">${price}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold ">Available Colors</h2>
              <div className="flex mt-2 space-x-3">
                {colors.map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 border rounded-full hover:border-4 hover:!border-gray-800"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between !mt-10 ">
<button onClick={handleAddToCart} className='flex items-center justify-center w-full h-10 font-semibold text-center text-white bg-black rounded-md hover:bg-gray-950'>Add to cart <FiShoppingCart className='ml-2'/></button>     
       </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
