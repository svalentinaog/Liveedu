export interface IUserState {
  signUp_name: string;
  signUp_email: string;
  signUp_phone: string;
  signUp_password: string;

  signIn_identifier: string;
  signIn_password: string;
}

export type UserStateKeys = keyof IUserState;

export type UserStateUpdate =
  | { key: "signUp_name"; value: string }
  | { key: "signUp_email"; value: string }
  | { key: "signUp_phone"; value: string }
  | { key: "signUp_password"; value: string }
  | { key: "signIn_identifier"; value: string }
  | { key: "signIn_password"; value: string };

const UserState: IUserState = {
  signUp_name: "",
  signUp_email: "",
  signUp_phone: "",
  signUp_password: "",

  signIn_identifier: "",
  signIn_password: "",
};

export default UserState;
