import React, {useState} from 'react';
import AddTasks from './components/AddTasks';
import Header from './components/Header'
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'meeting with john',
            day:5
        },
        {
            id:2,
            text:'watching TV',
            day:6
        },
        {
            id:3,
            text:'play football',
            day:7
        },
    ]
)
// const DeleteTask = (id) =>{
//   setTasks(tasks.filter((task) => task.id !== id))
// };
// const addTask = (task) => {
//  const id = Math.floor(Math.random()*1000)+1;
//  const newTask = {id, ...task};
//  setTasks([...tasks, newTask]);
// }

const deleteTask = (id) =>{
  setTasks(
    tasks.filter((task)=> task.id !== id)
  )
}
const AddTask = (task) => {
   const id = Math.floor(Math.random()*1000)+1;
 const newTask = {id, ...task};
 setTasks([...tasks, newTask]);

}
  return (
    <div>
        <Header title="now it works" content="first meeting with john" />
        <AddTasks onAdd={AddTask} />
        <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;