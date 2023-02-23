import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo } from "../interfaces/form";
import { toDoState } from "../Recoil/atom";

const ToDo = ({ text, id, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (propCategory: IToDo["category"]) => {
    console.log("I want to change ", propCategory);
    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: propCategory };

      return [
        ...prevToDos.slice(0, targetIndex),
        newToDo,
        ...prevToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TODO" && (
        <button onClick={() => onClick("TODO")}>Todo</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
};

export default ToDo;
