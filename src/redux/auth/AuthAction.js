import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getlocalstorage, setlocalstorage } from "../../localstorage/storage";
import { useNavigate } from "react-router-dom";
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
      // const navigate = useNavigate();
      console.log(data, "data auth");
      console.log(data.token, "usertokenasas");
      console.log(data.token, "usertokenasas");
      console.log(data.userInfo, data, "print");
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));

      return data;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
      //   toast.error(error.message);
    }
  }
);
