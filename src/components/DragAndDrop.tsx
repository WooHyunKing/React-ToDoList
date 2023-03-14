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
import Board from "./Board";
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

const DragAndDrop = () => {
  const [elements, setElements] = useRecoilState(elementState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;

    if (destination?.droppableId === source.droppableId) {
      setElements((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index as any, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(elements).map((boardId) => (
            <Board
              key={boardId}
              boardId={boardId}
              elements={elements[boardId]}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default DragAndDrop;
