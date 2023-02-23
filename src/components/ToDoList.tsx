import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { IForm, IToDo } from "../interfaces/form";
import { toDoSelector, toDoState } from "../Recoil/atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDo = useRecoilValue(toDoState);
  const [toDos, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>My ToDo List</h1>
      <CreateToDo />
      <h2>To Do</h2>
      <hr />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
