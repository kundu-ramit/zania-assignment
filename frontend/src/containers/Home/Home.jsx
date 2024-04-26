import { useEffect, useState } from "react";
import ImageCard from "../../components/Card/ImageCard";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import './Home.css'
import { fetchCatData, fetchDefaultData } from "./FetchCats";

const Home = () => {

  function ConvertToDraggableIndex(data)
{
  return <Draggable key={data.Position} draggableId={data.Position} index={data.Position} >
  {(provided) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <ImageCard
            {...data[0]}
          />
    </div>
  )}
</Draggable>
}

  const [catData , setCatData] = useState([...fetchDefaultData()])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCatData();
        setCatData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 

  const onDragEnd = ()=> {

  }

  return (
    <div className="home">
      <DragDropContext onDragEnd={onDragEnd}>
      <div className="card-container">
      <Droppable droppableId="droppable">
        {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
        <div className="row">
          <ConvertToDraggableIndex
            data={catData[0]}
          />
          <ConvertToDraggableIndex
            data={catData[1]}
          />
          <ConvertToDraggableIndex
            data={catData[2]}
          />
        </div>
        <div className="row">
        <ConvertToDraggableIndex
            data={catData[3]}
          />
         <ConvertToDraggableIndex
            data={catData[4]}
          />
        </div>
        </div>
        )}
        </Droppable>
      </div>
      </DragDropContext>
    </div>
  );
};



export default Home;


