import React, { useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotal } from '../store/cartSlice';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  return (
    <nav className="py-4 bg-white">
      <div className="container flex items-center justify-between px-4 mx-auto mt-2 max-w-7xl">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-[#3b346b]">
          <Link to="/">SHOPEELAND</Link>
        </div>

        {/* Middle - Navigation */}
        <div className="hidden space-x-8 md:flex">
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Home</a>
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Catalog</a>
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Blog</a>
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Contact</a>
        </div>

        {/* Right Side - Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" title="Wishlist">
            <FiHeart className="text-lg font-semibold text-[#3b346b] cursor-pointer hover:text-[#141920]" />
          </Link>
          <div className="relative">
            <Link to="/cart" title="Cart">
              <FiShoppingCart className="text-lg text-[#3b346b] cursor-pointer hover:text-[#141920]" />
            </Link>
            <span className="absolute px-2 text-xs font-semibold text-white bg-red-500 rounded-full -top-2 -right-2">
              {cartTotalQuantity}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import React from 'react';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { addToCart,getTotal } from '../store/cartSlice';
// import { useDispatch } from 'react-redux';

// const Navbar = () => {
//   const cartItems=useSelector(state=>state.cart.cart)
//   const cartTotalQuantity=useSelector(state=>state.cart.cartTotalQuantity);
//   const dispatch=useDispatch();

//   useEffect(()=>{
//   dispatch(getTotal());
//   },[cartItems,dispatch]);


//   return (
//     <nav className="bg-white shadow-md">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Left side: Name */}
//           <div className="text-xl font-semibold text-gray-800">
//             <Link to='/'>Store</Link>
//           </div>
//           {/* Right side: Cart */}
//           <div className="flex items-center space-x-4">
//             <button className="relative inline-flex items-center p-2 text-gray-600 hover:text-gray-800">
//              <Link to='/cart'>
//              <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.401 2.005m1.676 8.004a1 1 0 00.992.996h10.862a1 1 0 00.992-.996L21 5H6l-.938-4.682A1 1 0 004.07 0H1m1 2h.58"
//                 />
//               </svg>
//               <span className="absolute px-2 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
//               {cartTotalQuantity}
//               </span>
//              </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
