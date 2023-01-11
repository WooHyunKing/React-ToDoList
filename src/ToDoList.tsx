import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("ToDo shoud be longer");
//     }
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a Todo" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// };

const ToDoList = () => {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(watch());
  console.log(formState.errors);
  //   watch를 사용함으로써 form의 입력값을 추적할 수 있다.
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* toDo라는 상태를 만들어주고, onChange와 값을 prop으로 전달한다. */}
        <input
          {...register("toDo", { required: true, minLength: 5 })}
          placeholder="Write a Todo"
        />
        <input
          {...register("name", { required: true, minLength: 3 })}
          placeholder="Write a name"
        />
        <input
          {...register("email", { required: true, minLength: 3 })}
          placeholder="Write a email"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
