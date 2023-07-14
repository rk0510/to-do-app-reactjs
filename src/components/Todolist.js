import React from 'react';
import {MdOutlineDone} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import {MdDelete} from "react-icons/md";

const Todolist = ({tasks,setTasks,setEditTasks}) => {
    const handleCompelete = (task)=>{
        
        setTasks(
            tasks.map((item)=>{
                if(item.id === task.id){
                    return{...item,compeleted:!item.compeleted}
                }
                return item;
            })
        );

    };
    const handleEdit = ({id})=>{
        const findtasks  = tasks.find((tasks)=>tasks.id === id);
        setEditTasks(findtasks);

    }; 
    const handleDelete= ({id})=>{
        setTasks(tasks.filter((tasks)=>tasks.id!==id)); 
    };
  return (
    <div>  
        <ul>
        {tasks.map((tasks)=>(
          
            <li className='list-item' key={tasks.id}>
                <input type="text"
                value={tasks.title}
                className = {`list ${tasks.compeleted ? "compelete":" "}`}
                onChange = {(event)=>event.preventDefault()}/>
                <div>
                    <button className='button-compelete tasks-button'onClick={()=>handleCompelete(tasks)}>
                    <MdOutlineDone/>
                    </button>
                    <button className='button-edit tasks-button'onClick={()=>handleEdit(tasks)}>
                    <MdEdit/>
                    </button> 
                    <button className='button-delete tasks-button' onClick={()=>handleDelete(tasks)}>
                    <MdDelete/>
                    </button>
                </div>

            </li>
          

        ))}  </ul>
    </div>
  )
}

export default Todolist