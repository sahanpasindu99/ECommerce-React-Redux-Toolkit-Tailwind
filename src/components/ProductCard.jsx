import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faFire } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { addToCart } from '../store/cartSlice';
import { addToWishlist } from '../store/wishlistSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ product }) => {
  let rating = product.rating;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist=()=>{
     dispatch(addToWishlist(product));
  };

  return (
    <div
      className={`relative w-[230px] p-4 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl ${
        product.id === 1 ? 'bg-gradient-to-tl from-[#fade63] to-[#fcecc2e7]' : 'bg-white'
      }`}
    >
 
      {/* Most Popular Ribbon */}
      {product.id === 1 && (
        <div className="absolute flex items-center justify-center w-64 h-10 px-2 py-1 text-sm font-semibold text-white transform -rotate-45 -translate-x-1/2 -translate-y-1/2 bg-red-500 shadow-sm top-12 left-12">
          <FontAwesomeIcon icon={faFire} className="mr-1" />
          Most Popular
        </div>
      )}

      {/* Favorite Button */}
      <div className="absolute top-3 right-3">
        <button   onClick={handleAddToWishlist} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
          <FiHeart className="text-xl" />
        </button>
      </div>

      {/* Product Image */}
      <img src={product.image} alt="Product" className="w-full h-[148px] object-contain mb-4"  draggable="false"/>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs text-gray-400">{product.type}</p>
        <h2 className="text-lg font-semibold">{product.name}</h2>

        {/* Rating and Sold Count */}
        <div className="flex flex-col items-center mt-2">
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, index) => {
              if (index < filledStars) {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-yellow-400"
                    style={{ fontSize: '0.9rem' }}
                  />
                );
              } else if (index === filledStars && hasHalfStar) {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStarHalfAlt}
                    className="text-yellow-400"
                    style={{ fontSize: '0.9rem' }}
                  />
                );
              } else {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-gray-300"
                    style={{ fontSize: '0.9rem' }}
                  />
                );
              }
            })}

            <p className="text-gray-600 text-sm ml-[3px]">{product.rating}</p>
            <p className="ml-3 text-sm text-gray-600">{product.sold} sold</p>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <button onClick={handleAddToCart} className="w-10 h-10 p-2 text-gray-700 border border-gray-200 rounded-full shadow-md bg-gray-50 hover:bg-gray-300">
            <FiShoppingCart className="ml-[2px] text-lg" />
          </button>
          <button className="h-10 w-20 py-2 bg-[#4a2072e5] text-white text-sm font-bold rounded-full shadow-md">
            ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
