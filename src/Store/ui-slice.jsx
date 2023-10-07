import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { lightModeActive: false, navBarIsVisible: false },
  reducers: {
    toggle(state) {
      state.lightModeActive = !state.lightModeActive;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;