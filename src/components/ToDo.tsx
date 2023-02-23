import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo } from "../interfaces/form";
import { Categories, toDoState } from "../Recoil/atom";

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
  const onDelete = () => {
    setToDos((prevToDos) => {
      // const targetIndex = prevToDos.findIndex(todo => todo.id === id);
      return prevToDos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.TODO && (
        <button onClick={() => onClick(Categories.TODO)}>Todo</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDo;
