import { Categories } from "../Recoil/atom";

export interface IForm {
  toDo: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
