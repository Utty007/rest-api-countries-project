/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const funcSlice = createSlice({
    name: 'func',
    initialState: {selectedCountry:{}},
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountry= action.payload
        }
    }
})

export const funcActions = funcSlice.actions;
export default funcSlice;


// Example reducer to update the selected country data in the store.

