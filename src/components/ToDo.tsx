import React from "react";
import { IToDo } from "../interfaces/form";

const ToDo = ({ text }: IToDo) => {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
};

export default ToDo;
