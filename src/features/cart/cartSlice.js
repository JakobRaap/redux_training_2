import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      const doesItemExist = state.cartItems.some(
        (item) => action.payload.item.idMeal === item.idMeal
      );
      console.log(doesItemExist);
      if (!doesItemExist) {
        state.cartItems.push({
          ...action.payload.item,
          amount: action.payload.amount,
          price: (parseFloat(action.payload.item.idMeal) / 10000).toFixed(2),
          cartItem: true,
        });
      } else {
        state.cartItems.find(
          (item) => item.idMeal === action.payload.item.idMeal
        ).amount += action.payload.amount;
        console.log(action.payload.amount);
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.idMeal !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, clearCart, deleteFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalCartCost = (state) =>
  state.cart.cartItems
    .map((item) => item.amount * item.price)
    .reduce((item, total) => item + total, 0)
    .toFixed(2);
export default cartSlice.reducer;
