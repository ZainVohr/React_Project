import { createSlice } from "@reduxjs/toolkit";
import { getAuthUser } from "./AuthAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  userToken,
  error: null,
  success: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getAuthUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getAuthUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [getAuthUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const AuthReducer = AuthSlice.reducer;
