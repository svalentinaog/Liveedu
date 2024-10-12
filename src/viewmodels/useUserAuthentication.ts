import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserStateByKey,
  userRegistered,
} from "../models/slices/UserSlice";
import { UserStateKeys } from "../models/states/UserState";

export default function useUserAuthentication() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const updateField = (key: UserStateKeys) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateUserStateByKey({ key: key, value: event.target.value }));
    };
  };
  const handleSignUpForm = () => {
    // send form data to server
    // const { signUp_email, signUp_name, signUp_phone, signUp_password } = user;
    // FETCH/AXIOS.POST Y MANDAR OBJETO {signUp_email, signUp_name, signUp_phone, signUp_password }
    // DISPATCH
    dispatch(dispatch(userRegistered()));
  };
  return {
    user,
    methods: { updateField, handleSignUpForm },
  };
}
