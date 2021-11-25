import React from 'react';
// import {FaTrash} from 'react-icons/fa';
function Task({task, onDelete,onDoubleClick}) {
    
    return (
        <div className={`task ${task.reminder ?'reminder':""}`}  onDoubleClick={()=>(onDoubleClick(task))}>
             <h3 key={task.id}>{task.text}  
             <button onClick={()=>(onDelete(task.id))} >Delete</button>
             </h3>
        </div>
    );
}
// const Tasks= ({task}) => {
// return (
// <div className="task">
//   <h3>{task.text} <FaTrash onClick={()=> onDelete(task.id)}/></h3>
//   <p> {task.day} </p>

// </div>
export default Task;