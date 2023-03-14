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

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IBoardProps {
  elements: string[];
  boardId: string;
}

const Board = ({ elements, boardId }: IBoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId.toUpperCase()}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {elements.map((element, index) => (
              <DraggableCard key={index} element={element} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
