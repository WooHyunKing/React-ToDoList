import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 15px 10px;
  background-color: white;
`;

interface IDraggableCardProps {
  element: string;
  index: number;
}

const DraggableCard = ({ element, index }: IDraggableCardProps) => {
  console.log(element, "has been rerendered !");
  return (
    <Draggable key={element} draggableId={element} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {element}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
