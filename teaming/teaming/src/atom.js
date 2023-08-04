import { atom } from "recoil";

export const isAddingMemberAtom = atom({
  key: "isAddingMember",
  default: false,
});

export const isOngoingAtom = atom({
  key: "isOngoing",
  default: true,
});
