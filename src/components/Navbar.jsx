import React from 'react';
import { FiSearch, FiShoppingCart , FiShoppingBag} from 'react-icons/fi';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart,getTotal } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const cartItems=useSelector(state=>state.cart.cart)
  const cartTotalQuantity=useSelector(state=>state.cart.cartTotalQuantity);
  const dispatch=useDispatch();

    useEffect(()=>{
  dispatch(getTotal());
  },[cartItems,dispatch]);
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center mt-2">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-[#3b346b]">  <Link to='/'>SHOPEELAND</Link></div>

        {/* Middle - Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Home</a>
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Catelog</a>
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Blog</a>
          <a href="#" className="text-sm text-[#3b346b] font-semibold hover:text-[#141920]">Contact</a>
        </div>

        {/* Right Side - Search and Cart Icons */}
        <Link to='/cart'>
        <div className="flex items-center space-x-4">
         
          <FiSearch className="text-lg font-semibold text-[#3b346b] cursor-pointer hover:text-[#141920]" />
          <div className="relative">
            <FiShoppingCart className="text-lg  text-[#3b346b] cursor-pointer hover:text-[#141920]" />
            <span className="absolute -top-2 -right-2 font-semibold bg-red-500 text-white rounded-full px-2 text-xs">
            {cartTotalQuantity}
              </span>
          </div>
    
        </div>      </Link>
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
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
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
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-2">
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
