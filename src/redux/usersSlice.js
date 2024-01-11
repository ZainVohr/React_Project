import { createSlice } from "@reduxjs/toolkit";
const localuser = localStorage.getItem("user");
console.log(localuser);
const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    user: localuser ? JSON.parse(localuser) : [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // localStorage.setItem("Customer", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
