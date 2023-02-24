import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Converter from "./components/Converter";
import DragAndDrop from "./components/DragAndDrop";
import ToDoList from "./components/ToDoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />}></Route>
        <Route path="/convert" element={<Converter />}></Route>
        <Route path="/dd" element={<DragAndDrop />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
