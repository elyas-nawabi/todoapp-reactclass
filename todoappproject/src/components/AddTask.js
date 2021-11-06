import React , {useState} from 'react';

function AddTask(props) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if (!text) {
            alert("enter task");
            return;
        }
        // onAdd({text, day});
    }
    
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    task <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                    />
                    <br></br>
                    day <input
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        type="text"
                    />
                    <br></br>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}

export default AddTask;