import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice";
import userInfoSlice from "./userSlice";

export default configureStore({
  reducer: {
    register: registerReducer,
    user:userInfoSlice.reducer
   
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});