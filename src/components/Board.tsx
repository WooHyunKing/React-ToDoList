import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  background-color: grey;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 300px;
  margin: 0 2px;
`;

interface IBoardProps {
  elements: string[];
  boardId: string;
}

const Board = ({ elements, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {elements.map((element, index) => (
            <DraggableCard key={index} element={element} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Board;
