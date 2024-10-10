import { createSlice } from "@reduxjs/toolkit";
import UserState from "../states/UserState";
import UserReducer from "../reducers/UserReducer";

export const UserSlice = createSlice({
  name: "User",
  initialState: UserState,
  reducers: UserReducer,
});

export const { updateUserStateByKey, userRegistered } = UserSlice.actions;
export default UserSlice.reducer;
