import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseCart, getTotal } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="grid max-w-6xl grid-cols-1 gap-6 py-6 mx-auto lg:grid-cols-3">
      <div className="col-span-2 px-4 rounded-lg ">
        <h2 className="my-4 text-xl font-semibold sm:text-2xl">Shopping Bag</h2>
        <p className="mb-4 text-sm text-gray-600 sm:text-base">{cartItems.length} items in your bag.</p>

        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-500 sm:text-base">Your cart is empty.</p>
        ) : (
          <>
            {/* Table Heading */}
            <div className="grid grid-cols-12 p-4 mb-4 text-sm font-semibold text-gray-600 sm:text-base">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Cart Items */}
            <div className="mb-4 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid items-center grid-cols-12 p-4 bg-gray-100 rounded-lg shadow"
                >
                  {/* Product Image and Details */}
                  <div className="flex items-center col-span-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-20 h-20 rounded-lg sm:w-24 sm:h-24"
                      draggable={false}
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold sm:text-base lg:text-lg">{item.name}</h4>
                      <p className="text-xs text-gray-600 sm:text-sm">Color: {item.color}</p>
                      <p className="text-xs text-gray-600 sm:text-sm">Size: {item.size}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-sm font-semibold text-center sm:text-base">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center col-span-2 space-x-2">
                    <button
                      onClick={() => dispatch(decreaseCart(item))}
                      className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full hover:bg-gray-400 sm:w-8 sm:h-8"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold sm:text-lg ">{item.cartQuantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full hover:bg-gray-400 sm:w-8 sm:h-8"
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="col-span-2 text-sm font-semibold text-right text-orange-500 sm:text-base lg:text-lg">
                    ${(item.cartQuantity * item.price).toFixed(2)}
                  </div>

                  {/* Remove Button */}
                  <div className="col-span-12 mt-4 text-right">
                    <button
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      className="px-2 py-1 text-sm text-white bg-red-500 rounded-lg sm:px-4 sm:py-2 sm:text-base"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Right Section */}
      <div className="p-6 space-y-6 bg-white rounded-lg">
        {/* Calculated Shipping */}
        <div>
          <h4 className="mb-4 text-base font-semibold sm:text-lg">Calculated Shipping</h4>
          <div className="space-y-4">
            <select className="w-full px-2 py-1 text-sm bg-gray-200 rounded-lg sm:px-4 sm:py-2">
              <option>Country</option>
            </select>
            <select className="w-full px-2 py-1 text-sm bg-gray-200 rounded-lg sm:px-4 sm:py-2">
              <option>State / City</option>
            </select>
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full px-2 py-1 text-sm bg-gray-200 rounded-lg sm:px-4 sm:py-2"
            />
            <button className="w-full px-2 py-1 text-sm text-white bg-black rounded-lg sm:px-4 sm:py-2 hover:bg-slate-950">
              Update
            </button>
          </div>
        </div>

        {/* Coupon Code */}
        <div>
          <h4 className="mb-4 text-base font-semibold sm:text-lg">Redeem Code</h4>
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full px-2 py-1 mb-2 text-sm bg-gray-200 rounded-lg sm:px-4 sm:py-2"
          />
          <button className="w-full px-2 py-1 text-sm text-white bg-black rounded-lg sm:px-4 sm:py-2 hover:bg-slate-950">
            Apply
          </button>
        </div>

        {/* Cart Total */}
        <div className="p-4 bg-orange-400 rounded-lg">
          <h4 className="text-base font-semibold text-white sm:text-lg ">Cart Total</h4>
          <div className="flex justify-between py-1 text-sm font-semibold text-white sm:text-base">
            <span>Cart Subtotal:</span>
            <span>${cartTotalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1 text-sm font-semibold text-white sm:text-base ">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between py-1 text-sm font-semibold text-white sm:text-base ">
            <span>Discount:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between py-1 text-sm font-bold text-white sm:text-base lg:text-lg ">
            <span>Total:</span>
            <span>${cartTotalAmount.toFixed(2)}</span>
          </div>
          <button className="w-full px-2 py-1 mt-4 text-sm text-white bg-black rounded-lg hover:bg-slate-950 sm:px-4 sm:py-2">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
