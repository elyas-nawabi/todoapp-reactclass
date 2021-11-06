import React from 'react';

function Task({task, onDelete}) {
    
    return (
        <div>
             <h3 key={task.id}>{task.text}  
             <button onClick={()=>(onDelete(task.id))}>Delete</button>
             </h3>
        </div>
    );
}

export default Task;