import React from 'react'


//"id": 1, "position": 1, "category": "Shopping", "title": "Grocery Shopping", "status": "pending", "description": "Go to Trader Joe's and get 6 eggs, 1 gal milk, 1 bread"
const Task = ({ id, title, markAsDone, cancelTask})=>{
  return (
    <>
    <div>{title}</div>
    <button onClick={cancelTask}>X</button>
    <button onClick={markAsDone}>DONE</button>
    </>
  )
}

export default Task