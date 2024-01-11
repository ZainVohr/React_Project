import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        CategoryData: [],
        loading: false,
        error: false,
    },
    reducers: {
        setData: (state, action) => {
            state.CategoryData = action.payload;
        },
        setLoading: (state, action) => {

            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})
export const { setData, setLoading, setError } = categorySlice.actions;
export default categorySlice.reducer;