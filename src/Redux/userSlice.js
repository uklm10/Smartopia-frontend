import { createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./registerSlice";

export const userInfoSlice = createSlice({
  name: "user",
  initialState: { user:{},userLogedIn:false },
  reducers:{
    loginUser(state, action) {
      let newState = { user:action.payload, userLogedIn:true };

      return newState;
    },

    logoutUser(state) {
      state.user = {};
      state.userLogedIn = false;
    },
  },
});

export const userAction = userInfoSlice.actions;
export default userInfoSlice;
