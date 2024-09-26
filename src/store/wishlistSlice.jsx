import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css"; // Ensure you import your custom styles

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : [],
  },
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      const exists = state.wishlist.find((item) => item.id === newItem.id);
      if (!exists) {
        state.wishlist.push({ ...newItem, selected: false });
        toast.success("Item added to wishlist!", {
          position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast", // Apply custom class
        });
      } else {
        toast.info("Item is already in your wishlist.", {
          position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
        });
      }
      // Update localStorage
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    toggleSelect(state, action) {
      const item = state.wishlist.find((item) => item.id === action.payload);
      if (item) {
        item.selected = !item.selected;
      }
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    toggleSelectAll(state, action) {
      state.wishlist.forEach((item) => {
        item.selected = action.payload;
      });
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    removeItems(state) {
      const removedCount = state.wishlist.filter((item) => item.selected).length;
      state.wishlist = state.wishlist.filter((item) => !item.selected);
      toast.success(`${removedCount} item(s) removed from wishlist.`, {
        position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    removeItem(state, action) {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      // Uncomment this toast if you want to show a message when an item is removed
      // toast.success("Item removed from wishlist.", {
      //   position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   className: "custom-toast",
      // });
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    clearSelection(state) {
      state.wishlist.forEach((item) => {
        item.selected = false;
      });
      // Uncomment this toast if you want to show a message when the selection is cleared
      // toast.info("Selection cleared.", {
      //   position: window.innerWidth > 768 ? "bottom-left" : "bottom-center",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   className: "custom-toast",
      // });
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },
  },
});

export default wishlistSlice.reducer;
export const {
  addToWishlist,
  toggleSelect,
  toggleSelectAll,
  removeItems,
  removeItem,
  clearSelection,
} = wishlistSlice.actions;