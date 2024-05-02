import React from 'react'
import { useEffect, useState } from "react";

export default function Task() {

  const [taskList,setTaskList] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    setData([{"id": 1, "position": 1, "category": "Shopping", "title": "Grocery Shopping", "status": "pending", "description": "Go to Trader Joe's and get 6 eggs, 1 gal milk, 1 bread"},
    {"id": 2, "position": 2, "category": "Work", "title": "Feature Deadline - Slackbot", "status": "pending", "description": "Create a Slackbot to pull all Jira tasks and post in the team's channel"}])
  }, []); 
  useEffect(() => {

  }, [data]); 
  return (
    <>
    <div>Zania TMS</div>

    <button>New</button>
    <input>Search Category</input>
    <button>Go</button>
    <button>X</button>
    </>
  )
}
