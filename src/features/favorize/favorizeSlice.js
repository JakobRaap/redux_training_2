import { createSlice } from "@reduxjs/toolkit";

export const favorizeSlice = createSlice({
  name: "favorize",
  initialState: { favorizedIds: [] },
  reducers: {
    toggleFavorize: (state, action) => {
      const idToToggle = action.payload;
      if (state.favorizedIds.includes(idToToggle)) {
        state.favorizedIds = state.favorizedIds.filter(
          (id) => id !== idToToggle
        );
      } else {
        state.favorizedIds.push(idToToggle);
      }
    },
  },
});

export const { toggleFavorize } = favorizeSlice.actions;
export const selectFavorizedIds = (state) => state.favorize.favorizedIds;
export default favorizeSlice.reducer;
