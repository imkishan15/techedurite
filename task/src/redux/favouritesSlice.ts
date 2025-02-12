import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "../utils/types";

interface FavoritesState {
  favoriteEvents: Event[];
}

const initialState: FavoritesState = {
  favoriteEvents: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Event>) => {
      const event = action.payload;
      const index = state.favoriteEvents.findIndex(
        (e) => e.event_date_id === event.event_date_id
      );

      if (index === -1) {
        state.favoriteEvents.push(event); 
      } else {
        state.favoriteEvents.splice(index, 1); 
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
