import { createSlice } from "@reduxjs/toolkit";

export const numberOfMealsSlice = createSlice({
  name: "numberOfMeals",
  initialState: 2,
  reducers: {
    showTwoMoreMeals: (state, action) => {
      const numberOfFetchedItems = action.payload;

      if (state < numberOfFetchedItems) return (state += 2);
      else return state;
    },
    showTwoLessMeals: (state) => {
      if (state >= 3) {
        return (state -= 2);
      } else {
        return state;
      }
    },
  },
});

export const { showTwoLessMeals, showTwoMoreMeals } =
  numberOfMealsSlice.actions;
export const selectNumberOfMealsToShow = (state) => state.numberOfMeals;
export default numberOfMealsSlice.reducer;
