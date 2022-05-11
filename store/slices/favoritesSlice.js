import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const initialState = { favoriteItems: [] };

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const addedPlant = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );

      if (!addedPlant) {
        state.favoriteItems.push(action.payload);
        toast.info(`${action.payload.name} به علاقمندی ها اضافه شد`, {
          position: "bottom-right",
        });
      }
    },
    removeFromFavorites: (state, action) => {
      const nextFavoriteItems = state.favoriteItems.filter(
        (favoriteItem) => favoriteItem.id !== action.payload.id
      );
      state.favoriteItems = nextFavoriteItems;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
