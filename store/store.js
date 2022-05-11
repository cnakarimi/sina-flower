import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";

export default configureStore({
  reducer: { cart: cartReducer, favorites: favoritesReducer },
});
