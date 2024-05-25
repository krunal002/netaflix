import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: null,
    searchedMovie: null,
    toggle: false,
  },
  reducers: {
    // actions
    setSearchedMovieDetails: (state, action) => {
      const { searchedMovieName, movies } = action.payload;
      state.movieName = searchedMovieName;
      state.searchedMovie = movies;
    },
    setToggle: (state) => {
        state.toggle = !state.toggle;
      },
  },
});
export const { setSearchedMovieDetails, setToggle } = searchSlice.actions;
export default searchSlice.reducer;
