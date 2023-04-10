import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  active: -1,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoriesList: (state, action) => {
      state.items = action.payload;
    },
    setCategory: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setCategoriesList, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
