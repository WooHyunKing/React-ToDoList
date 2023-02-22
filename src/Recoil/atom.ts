import { atom } from "recoil";
import { IToDo } from "../interfaces/form";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
