import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { product } from '../../public/product';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams(); 
  const productId = parseInt(id, 10); 
  const dispatch = useDispatch();

  const selectedProduct = product.find((p) => p.id === productId);
  
  if (!selectedProduct) {
    return <div className="text-lg font-semibold text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
  };

  const { name, images, price, rating, sold, qty, description } = selectedProduct;
  const sizes = [7, 8, 9, 10, 11]; 
  const colors = ['#4B0082', '#006400', '#0B0B0B'];
  const [mainImage, setMainImage] = useState(images[0]); 
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setMainImage(images[index]);
    setSelectedIndex(index);
  };

  return (
    <div className="flex items-center justify-center max-w-6xl min-h-[700px] md:min-h-[520px] p-4 mx-auto lg:px-0">
      {/* Left Div: Back Button, Title, Description */}
      <div className="flex flex-col w-full px-2 mb-8 md:mb-0 md:flex-row md:px-0">
        <div className="flex flex-col flex-1 ml-4 space-y-8">
          <button className="flex justify-start font-semibold text-gray-500 transition-colors hover:text-gray-800">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-lg">←</span>
              <span>Back</span>
            </Link>
          </button>
          <h1 className="!mt-8 text-gray-900 text-4xl font-extrabold tracking-wide">{name}</h1>
          <p className="!mt-4 text-md text-gray-600 leading-relaxed">{description}</p>

          {/* Image Thumbnails */}
          <div className="flex mt-4 space-x-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`object-cover w-20 h-20 border cursor-pointer rounded-[8px] transition-all duration-200 hover:shadow-md ${
                  selectedIndex === index ? 'border-2 border-blue-500' : 'border-gray-300'
                }`}
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
          <div className="relative space-y-6 md:top-6">
            <div className="flex items-center space-x-14 justify-between !mt-6">
              <h2 className="text-lg font-semibold text-gray-900">Sold</h2>
              <p className="text-gray-600">{rating}/5 ({sold} sold)</p>
            </div>

            <div className="flex items-center space-x-14 justify-between !mt-4">
              <h2 className="text-lg font-semibold text-gray-900">Price</h2>
              <p className="text-2xl font-bold text-gray-900">${price}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Available Colors</h2>
              <div className="flex mt-2 space-x-3">
                {colors.map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 border rounded-full hover:border-4 hover:!border-gray-900 transition-all"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between !mt-10">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center w-full h-12 font-semibold text-center text-white transition-all bg-black rounded-lg hover:bg-gray-900"
              >
                Add to cart <FiShoppingCart className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
