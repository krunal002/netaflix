import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    setNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { setNowPlayingMovie } = movieSlice.actions;
export default movieSlice.reducer;
