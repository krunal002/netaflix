import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieClip: null
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getMovieClip: (state, action) => {
      state.movieClip = action.payload
    }
  },
});

export const { getNowPlayingMovies, getMovieClip } = movieSlice.actions;
export default movieSlice.reducer;
