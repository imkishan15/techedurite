import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import favoritesReducer from "./favouritesSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
