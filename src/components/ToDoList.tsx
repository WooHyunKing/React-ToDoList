import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { IForm, IToDo } from "../interfaces/form";
import { toDoState } from "../Recoil/atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDo = useRecoilValue(toDoState);

  return (
    <div>
      <h1>My ToDoList</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDo.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
