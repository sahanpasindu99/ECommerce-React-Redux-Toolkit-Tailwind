import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi'; // Import heart and cart icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome star icons
import girl from '../assets/girl.png'; // Assuming you're using the girl image for the product
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = ({product}) => {
  let rating = product.rating; // Rating value
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const dispatch=useDispatch();

    const handleAddToCart = () => {
    dispatch(addToCart(product));
    }
  return (
    // <div className="relative w-[234px] p-4 bg-white rounded-3xl shadow-lg transition-transform transform hover:scale-105">
<div
  className={`relative w-[230px] p-4 rounded-3xl shadow-lg hover:shadow-2xl ${
    product.id === 1 ? " bg-gradient-to-tl from-[#fade63] to-[#fcecc2e7] " : "bg-white"
  }`}
>

    {/* Top Icons */}
      <div className="absolute flex gap-1 top-3 left-3">
        {/* <div className="w-3 h-3 bg-black rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div> */}
      </div>

      {/* Favorite Button */}
      <div className="absolute top-3 right-3">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
          <FiHeart className="text-xl" />
        </button>
      </div>

      {/* Product Image */}
      <img src={product.image} alt="Product" className="w-full h-[148px] object-contain mb-4" />

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs text-gray-400">{product.type}</p>
        <h2 className="text-lg font-semibold">{product.name}</h2>

        {/* Rating and Sold Count */}
        <div className="flex flex-col items-center mt-2">
          {/* Rating Stars */}
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

            {/* Rating Text */}
            <p className="text-gray-600 text-sm ml-[3px]">{product.rating}</p>
            {/* Sold Count */}
            <p className="ml-3 text-sm text-gray-600">{product.sold} sold</p>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {/* Add to Cart Button */}
          <button   onClick={handleAddToCart} className="w-10 h-10 p-2 text-gray-700 border border-gray-200 rounded-full shadow-md bg-gray-50 hover:bg-gray-300">
            <FiShoppingCart className="ml-[2px] text-lg" />
          </button>

          {/* Price Button */}
          <button className="h-10 w-20 py-2 bg-[#4a2072e5] text-white text-sm font-bold rounded-full shadow-md">
            ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;







// import React from 'react';
// import girl from '../assets/girl.png'; // Assuming you are using the image for the product

// const Products = ({ title, price, highlighted }) => {
//   return (
//     <div
//       className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105
//       ${highlighted ? 'bg-[#24a7d7] text-white' : 'bg-white text-black'}`}
//       style={{ maxWidth: '280px' }}
//     >
//       <img src={girl} alt={title} className="object-cover w-40 h-40 mb-4" />
//       <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-black'}`}>
//         {title}
//       </h3>
//       <p className={`text-sm text-gray-500 mb-4 ${highlighted ? 'text-white' : 'text-gray-500'}`}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
//       </p>
//       <p className={`text-lg font-bold ${highlighted ? 'text-white' : 'text-black'}`}>${price}</p>

//       <div className="mt-2 mb-4">
//         <span className="mr-2">S M L XL</span>
//       </div>

//       <button
//         className={`px-6 py-2 rounded-full font-semibold text-sm ${
//           highlighted
//             ? 'bg-white text-[#24a7d7]'
//             : 'bg-[#f398db] text-white hover:bg-[#e336f0]'
//         }`}
//       >
//         ADD TO CART
//       </button>
//     </div>
//   );
// };


// export default Products;



// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../store/cartSlice';

// const Products = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="max-w-sm overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-2xl">
//       {/* Product Image */}
//       <img
//         className="object-cover w-full h-48"
//         src={product.image}
//         alt={product.name}
//       />

//       {/* Product Details */}
//       <div className="flex flex-col justify-between p-4">
//         {/* Product Name */}
//         <h2 className="mb-2 text-xl font-semibold text-gray-800 truncate">
//           {product.name}
//         </h2>
//         <h5 className="mb-2 font-semibold text-gray-800 text-md ">
//          USD: {product.price}
//         </h5>

//         {/* Product Description (optional) */}
//         <p className="mb-4 text-sm text-gray-600 truncate">
//           {product.description || "This is a great product!"}
//         </p>

//         {/* Add to Cart Button */}
//         <button
//           onClick={handleAddToCart}
//           className="w-full px-4 py-2 mt-auto font-semibold text-center text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;
