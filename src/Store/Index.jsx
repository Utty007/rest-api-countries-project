import { configureStore } from "@reduxjs/toolkit";
import funcSlice from "./func-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        func: funcSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store