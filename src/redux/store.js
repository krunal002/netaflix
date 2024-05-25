import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: userSlice,
    movie: movieSlice,
    search: searchSlice
  },
});
export default store;
