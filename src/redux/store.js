import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storageImport from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderslice";
import authReducer from "./slices/authSlice"


const storage = storageImport.default || storageImport;

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"], // Persist only cart
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

