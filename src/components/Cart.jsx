import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseCart ,getTotal} from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const {cartTotalAmount}=useSelector((state)=>state.cart)
  
  const dispatch = useDispatch();

  useEffect(()=>{
 dispatch(getTotal())

  },[cartItems,dispatch])

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Cart Items</h2>

      {/* Cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-24 h-24 mr-4 rounded-lg"
              />

              {/* Product Details */}
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {item.name}
                </h4>

                <p className="text-gray-600">Price: ${item.price}</p>

                <h4 className="font-semibold text-gray-800 truncate text-md">
                  Total: ${(item.cartQuantity * item.price).toFixed(2)}
                </h4>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center">
                {/* Decrease Quantity Button */}
                <button
                  onClick={() => dispatch(decreaseCart(item))}
                  className="flex items-center justify-center w-8 h-8 text-gray-800 bg-gray-300 rounded-full"
                >
                  -
                </button>

                {/* Quantity */}
                <span className="mx-4 text-lg font-semibold text-gray-800">
                  {item.cartQuantity}
                </span>

                {/* Increase Quantity Button */}
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="flex items-center justify-center w-8 h-8 text-gray-800 bg-gray-300 rounded-full"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                className="px-4 py-2 ml-4 text-white transition-colors duration-200 bg-red-500 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <h2>Subtotal:${cartTotalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
