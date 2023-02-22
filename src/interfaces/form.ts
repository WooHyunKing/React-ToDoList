export interface IForm {
  toDo: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}
