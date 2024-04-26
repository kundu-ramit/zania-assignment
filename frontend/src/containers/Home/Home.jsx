import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ImageCard from '../../components/Card/ImageCard';

const Home = () => {
  const [cards, setCards] = useState([
    { id: 'card1', title: 'Card 1', description: 'This is card 1.' },
    { id: 'card2', title: 'Card 2', description: 'This is card 2.' },
    { id: 'card3', title: 'Card 3', description: 'This is card 3.' },
    { id: 'card4', title: 'Card 4', description: 'This is card 4.' },
    { id: 'card5', title: 'Card 5', description: 'This is card 5.' },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list

    const newCards = Array.from(cards);
    const [reorderedItem] = newCards.splice(result.source.index, 1);
    newCards.splice(result.destination.index, 0, reorderedItem);

    setCards(newCards);
  };

  return (
    <div className="home">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map(({ id, title, description }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ImageCard
                        imageUrl={`https://source.unsplash.com/200x200/?kitten${id}`}
                        title={title}
                        description={description}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Home;