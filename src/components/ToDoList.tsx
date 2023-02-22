import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IForm>();

  const [toDo, setToDo] = useRecoilState<IToDo[]>(toDoState);

  const onValid = (data: IForm) => {
    console.log(data?.toDo);
    setToDo((item) => [
      { text: data.toDo, id: Date.now(), category: "TODO" },
      ...item,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>My ToDoList</h1>
      <hr></hr>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Todo is required !",
          })}
        ></input>

        <button>Add</button>
        <span>{errors?.toDo?.message}</span>
      </form>
      <ul>
        {toDo.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
