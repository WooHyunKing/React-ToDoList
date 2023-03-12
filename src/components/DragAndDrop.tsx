import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { elementState } from "../Recoil/atom";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const Board = styled.div`
  background-color: grey;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 300px;
  margin: 0 2px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 15px 10px;
  background-color: white;
`;

const DragAndDrop = () => {
  const [elements, setElements] = useRecoilState(elementState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setElements((oldElements) => {
      const elementsCopy = [...oldElements];
      elementsCopy.splice(source.index, 1);
      elementsCopy.splice(destination?.index as any, 0, draggableId);
      return elementsCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {elements.map((element, index) => (
                  <DraggableCard element={element} index={index} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
          <Board></Board>
          <Board></Board>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default DragAndDrop;
