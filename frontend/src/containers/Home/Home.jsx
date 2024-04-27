import { useEffect, useState } from "react";
import ImageCard from "../../components/Card/ImageCard";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import './Home.css'
import { fetchCatData, fetchDefaultData ,updateCatData} from "./FetchCats";

const Home = () => {

  function ConvertToDraggableIndex({data})
{
  return <Draggable key={data.Position} draggableId={data.Position} index={parseInt(data.Position)} >
  {(provided) => (
    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <ImageCard
            {...data}
          />
    </div>
  )}
</Draggable>
}

  const [catData , setCatData] = useState([...fetchDefaultData()])
  const [isDataFetched,setIsDataFetched] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCatData();
        setCatData(response);
        setIsDataFetched(true)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 

  const saveData = async(catData) => {
    try {
      await updateCatData(catData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const onDragEnd = ({source,destination})=> {
    if(source == null || destination == null )
    return;
    const s = source.index;
    const d = destination.index;
    let bdata = [];
    for(var i=0;i<catData.length;i++)
    {
      bdata[i] = {...catData[i]}
      if(bdata[i].Position == s)
      {
        bdata[i].Position = d.toString();
        continue;
      }
      if(bdata[i].Position == d)
      {
        bdata[i].Position = s.toString();
      }
    }
    bdata = bdata.sort((a, b) => {
      return a.Position - b.Position;
  });
  
  setCatData([...bdata]);
  saveData(bdata)
  }

  return (
    <div className="home">
      <DragDropContext onDragEnd={onDragEnd}>
      <div className="card-container">
      <Droppable droppableId="droppable" direction="horizontal">
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


