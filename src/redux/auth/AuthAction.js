import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getAuthUser = createAsyncThunk(
  "AuthUsers",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data, "data auth");
      console.log(data.token, "usertokenasas");
      localStorage.setItem("userToken", data.token);

      return data;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
      //   toast.error(error.message);
    }
  }
);
