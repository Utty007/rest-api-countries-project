import { createSlice } from "@reduxjs/toolkit";

const funcSlice = createSlice({
    name: 'func',
    initialState: {selectedCountry:{}},
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountry= action.payload
        },
        clearSelectedCountry: (state) => {
            return null;
        },
    }
})

export const funcActions = funcSlice.actions;
export default funcSlice;


// Example reducer to update the selected country data in the store.

