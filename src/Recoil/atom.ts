import { atom, selector } from "recoil";
import { IToDo } from "../interfaces/form";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((todo) => todo.category === "TODO"),
      toDos.filter((todo) => todo.category === "DOING"),
      toDos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
