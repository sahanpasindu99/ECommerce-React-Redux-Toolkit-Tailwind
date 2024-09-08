import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.success("Item added to wishlist!"
          ,{
            position:"bottom-left",
        },
        //   ,{
        //   position: "bottom-left",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",  // Dark, colored, or light themes
        //   icon: "🛒",        // Custom icons
        // }
      );      
      } else {
        toast.info("Item is already in your wishlist."
          ,{
            position:"bottom-left",
        },
        );
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
      toast.success(`${removedCount} item(s) removed from wishlist.`
        ,{
          position:"bottom-left",
      },
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    removeItem(state, action) {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      // toast.success("Item removed from wishlist."
      //   ,{
      //     position:"bottom-left",
      // },
      // );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },

    clearSelection(state) {
      state.wishlist.forEach((item) => {
        item.selected = false;
      });
      // toast.info("Selection cleared.");
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
