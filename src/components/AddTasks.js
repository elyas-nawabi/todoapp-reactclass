import React,{useState} from 'react';

function AddTasks({onAdd}) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        onAdd({text, day})
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                <label>taskname</label> 
                <input type="text"
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                />
                </div>
                <div>
                <label>day</label> 
                <input type="text"
                     value={day}
                     onChange={(e) => setDay(e.target.value)}
                />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default AddTasks;