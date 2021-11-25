import React  from 'react';
import Task from './Task';
function Tasks({tasks, onDelete,onDoubleClick},index) {
    
    return (
        <div>
            {
                tasks.map((task) =>(
                   <Task task={task} onDelete={onDelete} onDoubleClick={onDoubleClick} />
                ) )
            }
        </div>
    );
}

export default Tasks;