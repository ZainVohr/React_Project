import { connect } from 'react-redux'
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const getAllData = createAsyncThunk("Products", async () => {
    const response = await fetch("https://dummyjson.com/products")
    const result = response.json()
    return result;
})

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        data: [],
        loading: false,
        error: false,
    },
    reducers: {
        setProductData: (state, action) => {
            state.data = action.payload;
        },
        setProductLoading: (state, action) => {

            state.loading = action.payload;
        },
        setProductError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true;
        },
        [getAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;

        },
        [getAllData.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
    },
})
export const selectProducts = (state) => state.products;
export const { setProductData, setProductLoading, setProductError } = productSlice.actions;
export default productSlice.reducer;