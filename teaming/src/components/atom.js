import { atom } from "recoil";

export const tokenState = atom({
  key: "tokenState",
  default: "",
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const memberIdState = atom({
  key: "memberIdState",
  default: "",
});

export const nickNameState = atom({
  key: "nickNameState",
  default: "",
});
