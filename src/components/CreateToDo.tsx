import React from "react";
import { useForm } from "react-hook-form";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { IForm } from "../interfaces/form";
import { categoryState, toDoState } from "../Recoil/atom";

const CreateToDo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IForm>();
  const setToDo = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const onValid = (data: IForm) => {
    console.log(data?.toDo);
    setToDo((item) => [{ text: data.toDo, id: Date.now(), category }, ...item]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: "Todo is required !",
        })}
      ></input>
      <button>Add</button>
      <span>{errors?.toDo?.message}</span>
    </form>
  );
};

export default CreateToDo;
