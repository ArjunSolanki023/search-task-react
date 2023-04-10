import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import categoryReducer from "./reducers/categorySlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
  },
});
