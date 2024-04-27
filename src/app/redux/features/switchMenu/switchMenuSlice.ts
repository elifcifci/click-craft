import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwitchedMenu: false,
};

export const switchMenuSlice = createSlice({
  name: "isSwitchedMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isSwitchedMenu = true;
    },
    closeMenu: (state) => {
      state.isSwitchedMenu = false;
    },
    switchMenu: (state) => {
      state.isSwitchedMenu = !state.isSwitchedMenu;
    },
  },
});

export const { openMenu, closeMenu, switchMenu } = switchMenuSlice.actions;
export default switchMenuSlice.reducer;