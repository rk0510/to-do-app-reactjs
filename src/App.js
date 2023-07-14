import React,{useState,useEffect} from 'react';
import './App.css';
import { Header } from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';

const App = ()=> {
  const initialState = JSON.parse(localStorage.getItem("tasks"))||[];
  const [input,setInput]=useState("");
  const [tasks,setTasks]=useState(initialState);
  const [editTasks,setEditTasks] = useState(null);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);


  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          tasks = {tasks}
          setTasks = {setTasks}
          editTasks = {editTasks}
          setEditTasks = {setEditTasks}
          />
        </div>
        <div>
          <Todolist tasks={tasks} 
          setTasks={setTasks}
          setEditTasks={setEditTasks}/>
        </div>
       
      
      </div>
  
    </div>
  );
}

export default App;
