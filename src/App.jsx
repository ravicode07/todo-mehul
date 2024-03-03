
import { useState } from 'react'
import './App.css'
import todo from './assets/todo.png'; // Import the image

function App() {
  
  const[todoList, setTodoList] = useState([]);
  const[newTask, setNewTask] = useState("")

  let handleChange = (e) =>{
    setNewTask(e.target.value)
  }

  function addTask() {

    const task = {
    id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id+1,
    taskname : newTask,

    }


    setTodoList ([...todoList, task]);
  }

    

  const deletetodo = (id) => {
    setTodoList(todoList.filter((task)=> task.id !== id))
   
    
  }
  
  return (
    <div className='wrapper'>

    <div className='container'>
     <h1 style={{color:"purple", marginLeft:"265px"}}> ' To - Do - List '</h1>
    <div>
     
     <input type='text' placeholder='write your task' onChange={handleChange} style={{width:"350px",marginLeft:"180px",height:"25px"}}></input>
     <button onClick={addTask} style={{marginLeft:"20px",height:"35px",fontSize:"16px",padding:"5px",backgroundColor:"purple",color:"white"}}>Add-To-Do</button>

    </div>
    
    
      
    <div className='list'>{todoList.map((task)=>{return <div><h3 style={{display: "inline",
width: "fit-content",
padding: "3px",
background: "brown",
color: "white",
border: "2px solid red",
padding:"5px",
marginLeft:"250px",

fontFamily:"monospace",


}}>{task.taskname}</h3>
    
    <button onClick={()=> deletetodo(task.id)}className='closebtn'>X</button></div>})}</div>
     
    </div>

    
    </div>

)

}

        
    

 


export default App;
