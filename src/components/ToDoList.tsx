import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { IForm, IToDo } from "../interfaces/form";
import { categoryState, toDoSelector, toDoState } from "../Recoil/atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDo = useRecoilValue(toDoState);
  const [currentCate, setCurrentCate] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCurrentCate(event.currentTarget.value);
  };

  console.log(currentCate);

  return (
    <div>
      <h1>My ToDo List</h1>
      <CreateToDo />
      <select onInput={onInput}>
        <option value="TODO">ToDo</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
