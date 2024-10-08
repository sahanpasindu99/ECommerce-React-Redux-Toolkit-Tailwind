import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css"; // Add a custom stylesheet for styling toasts

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // Item exists in the cart, increase its quantity
        state.cart[itemIndex].cartQuantity += 1;
        toast.info("Increased item quantity!", {
          position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast", // Reference to the custom CSS class
        });
      } else {
        // Item does not exist in the cart, add it
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
        toast.success("Item added to cart!", {
          position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      // toast.success("Item removed from cart!", {
      //   position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   className: "custom-toast",
      // });
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].cartQuantity > 1) {
        // Decrease the quantity if it's greater than 1
        state.cart[itemIndex].cartQuantity -= 1;
        // toast.info("Decreased item quantity in the cart.", {
        //   position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
        //   autoClose: 1000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   className: "custom-toast",
        // });
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        // Remove item if the quantity is 1
        state.cart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        // toast.success("Item removed from cart.", {
        //   position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
        //   autoClose: 1000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   className: "custom-toast",
        // });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.success("Cart cleared!", {
        position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
    },
    getTotal: (state) => {
      let { totalAmount, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalQuantity += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = cartSlice.actions;