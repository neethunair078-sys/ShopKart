import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;

