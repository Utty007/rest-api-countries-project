import { createSlice } from "@reduxjs/toolkit";

function detectSystemColorMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDarkMode;
}


const uiSlice = createSlice({
  name: "ui",
  initialState: { lightModeActive: !detectSystemColorMode() },
  reducers: {
    toggle(state) {
      state.lightModeActive = !state.lightModeActive;
    }
  },
});


export const uiActions = uiSlice.actions;

export default uiSlice;