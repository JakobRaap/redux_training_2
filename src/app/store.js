import { configureStore } from "@reduxjs/toolkit";
import { mealApi } from "../features/api/mealApiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import favorizeReducer from "../features/favorize/favorizeSlice";
import numberOfMealsReducer from "../features/numberOfMeals/numberOfMealsSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    favorize: favorizeReducer,
    numberOfMeals: numberOfMealsReducer,
    cart: cartReducer,
    [mealApi.reducerPath]: mealApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware),
});
setupListeners(store.dispatch);
