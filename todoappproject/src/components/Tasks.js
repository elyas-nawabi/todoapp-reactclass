import React  from 'react';
import Task from './Task';
function Tasks({tasks, onDelete}) {
    
    return (
        <div>
            {
                tasks.map((task) =>(
                   <Task task={task} onDelete={onDelete} />
                ) )
            }
        </div>
    );
}

export default Tasks;