import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IToDo } from "../interfaces/form";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector({
  key: "hour",
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute / 60;
  },

  set: ({ set }, newValue) => {
    const minute = Number(newValue) * 60;
    set(minuteState, minute);
  },
});

interface IElementState {
  [key: string]: string[];
}

export const elementState = atom<IElementState>({
  key: "element",
  default: {
    todo: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
