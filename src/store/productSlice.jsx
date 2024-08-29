import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/Status";
 import { product } from "../../public/product";

// Create a slice for product state management
const productSlice = createSlice({
    name: 'products', // Name of the slice
    initialState: {
        data: [],      // Initial product data as an empty array
        status: 'idle' // Status starts as 'idle' (not loading)
    },
    reducers: {
        // Synchronous action for manually fetching products
        fetchProducts(state, action) {
            state.data = action.payload; // Assign the payload (product data) to the state
        }
    },
    extraReducers: (builder) => {
        // Handle different states of the async action (getProducts)
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                // When the async thunk is successful, assign the fetched data to the state
                state.data = action.payload;
                state.status = StatusCode.IDLE; // Set the status to idle (loading completed)
            })
            .addCase(getProducts.pending, (state) => {
                // While the async thunk is pending, set the status to loading
                state.status = StatusCode.LOADING;
            })
            .addCase(getProducts.rejected, (state) => {
                // If the async thunk fails, set the status to error
                state.status = StatusCode.ERROR;
            });
    }
});

// Export the reducer from the product slice
export default productSlice.reducer;

// Export the synchronous fetchProducts action from the product slice
export const { fetchProducts } = productSlice.actions;

// Create an async thunk to fetch products asynchronously
// This function returns a promise that resolves with the fetched products data

// export const getProducts = createAsyncThunk('products/get', async () => {
//     // Fetching products data from the /products.json file (assumed to be in the public folder)
//     const data = await fetch('/products.json');
//     const result = await data.json(); // Convert the response to JSON
//     return result; // The result will be used in the extra reducers above
// });

export const getProducts = createAsyncThunk('products/get', async (_, { rejectWithValue }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(product);
        }, 500); // Simulate network delay
      });
     
});

// The following commented-out code is an alternative way of fetching products using a regular async function
// It uses dispatch to fetch and manually update the state, but is less common when using createAsyncThunk

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('/products.json'); // Assuming products.json is in the public folder
//         const result = await data.json();
//         dispatch(fetchProducts(result)); // Dispatch the synchronous fetchProducts action with the fetched result
//     }
// }
