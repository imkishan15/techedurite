import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEvents } from "../utils/api";

interface EventsState {
  events: any[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(
        fetchEvents.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? "An unknown error occurred";
        }
      );
  },
});

export default eventsSlice.reducer;
