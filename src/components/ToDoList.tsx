import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { IForm, IToDo } from "../interfaces/form";
import {
  Categories,
  categoryState,
  toDoSelector,
  toDoState,
} from "../Recoil/atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDo = useRecoilValue(toDoState);
  const [currentCate, setCurrentCate] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCurrentCate(event.currentTarget.value as any);
  };

  console.log(currentCate);

  return (
    <div>
      <h1>My ToDo List</h1>
      <CreateToDo />
      <select onInput={onInput}>
        <option value={Categories.TODO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
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
