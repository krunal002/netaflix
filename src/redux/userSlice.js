import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: false,
    open: false,
    id: "",
  },
  reducers: {
    // actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setUser, setIsLoading, setOpen, getId } = userSlice.actions;
export default userSlice.reducer;
