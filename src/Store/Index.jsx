import { configureStore } from "@reduxjs/toolkit";
import funcSlice from "./func-slice";

const store = configureStore({
    reducer: {
        func: funcSlice.reducer
    }
})

export default store