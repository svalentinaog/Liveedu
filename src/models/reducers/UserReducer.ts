import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserState, UserStateUpdate } from "../states/UserState";

const UserReducer = {
  updateUserStateByKey: (
    state: IUserState,
    action: PayloadAction<UserStateUpdate>
  ) => {
    state[action.payload.key] = action.payload.value;
  },

  userRegistered: (state: IUserState) => {
    state.signUp_email = "";
    state.signUp_name = "";
    state.signUp_phone = "";
    state.signUp_password = "";
  },
};

export default UserReducer;
