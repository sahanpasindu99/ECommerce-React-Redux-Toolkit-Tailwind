import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
        cartTotalAmount:0,
        cartTotalQuantity:0,
    },
    reducers:{
         addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (itemIndex>=0) {
                // If the item is already in the cart, increase its cartQuantity by 1
                state.cart[itemIndex].cartQuantity += 1;
            } else {
                // If the item is not in the cart, add it to the cart and set cartQuantity to 1
                const tempProduct= {...action.payload,cartQuantity:1}
                state.cart.push(tempProduct);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter(product=>product.id !== action.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            
        },
        decreaseCart:(state,action)=>{
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
              if (state.cart[itemIndex].cartQuantity >1){
                state.cart[itemIndex].cartQuantity -=1;
              }
              else if(state.cart[itemIndex].cartQuantity ===1){
                  const nextCartItems=state.cart.filter(item=>item.id !== action.payload.id);
                  state.cart=nextCartItems;
              }
              
        },
        clearCart:(state,action)=>{
            state.cart=[];
            localStorage.setItem("cartItems",JSON.parse(state.cart));
        },
        getTotal: (state) => {
            let { totalAmount, totalQuantity } = state.cart.reduce(
                (cartTotal, cartItem) => 
                    {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.totalAmount += itemTotal;  // Adding item total to the subtotal
                    cartTotal.totalQuantity += cartQuantity; // Adding item quantity to total quantity

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
    }
})

export default cartSlice.reducer;
export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotal}= cartSlice.actions;