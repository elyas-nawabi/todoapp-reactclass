import React, {useState, useEffect} from 'react';
import AddTasks from './components/AddTasks';
import Header from './components/Header'
import Tasks from './components/Tasks';
import './index.css';

function App() {
//   const [tasks, setTasks] = useState(
    // [
    //     {
    //         id:1,
    //         text:'meeting with john',
    //         day:5,
    //         reminder:true
    //     },
    //     {
    //         id:2,
    //         text:'watching TV',
    //         day:6,
    //         reminder:false
    //     },
    //     {
    //         id:3,
    //         text:'play football',
    //         day:7,
    //         reminder:false
    //     },
    // ]
// )
const [tasks, setTasks] = useState([]);
useEffect(() => {
 const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer);
 };
 getTasks();
},[]);
const fetchTasks = async () => {
    const result = await fetch('http://localhost:8000/task');
  const data = await result.json();
   return data;
}

// const [tasks, setTasks] = useState([]);
// useEffect(() => {
//   const getTasks = async()=>{
//     const tasksFromServer = await fetchTasks()
//     setTasks(tasksFromServer)
//   };
//   getTasks();
// }, []);

// const fetchTasks = async () => {
//   const result = await fetch('http://localhost:8000/task');
//   const data = await result.json();
//   return data;
// }
// const [showAddForm, setshowAddForm] = useState(false)
const [showAddForm, setshowAddForm] = useState(false)

// const DeleteTask = (id) =>{
//   setTasks(tasks.filter((task) => task.id !== id))
// };
// const addTask = (task) => {
//  const id = Math.floor(Math.random()*1000)+1;
//  const newTask = {id, ...task};
//  setTasks([...tasks, newTask]);
// }
// const onToggle = (id) => {
//   setTasks(
//     tasks.map((task)=>
//     task.id === id ? {...task, reminder:!task.reminder} : task,
//     ),
//     alert(id)
//   )
// }
const onToggle = async(task) => {
 const updatedTask = {...task, reminder:!task.reminder};
 const result = await fetch(`http://localhost:8000/task/${task.id}`,{
    method:"PUT",
    headers:{
      'Content-type':"application/json"
    },
    body:JSON.stringify(updatedTask)
  })
  const data = await result.json()
 
  setTasks(
    tasks.map((item)=>
    item.id === task.id ? {...item, reminder:data.reminder} : item,
    ),
    
  )
}


// const deleteTask = (id) =>{
//   setTasks(
//     tasks.filter((task)=> task.id !== id)
//   )
// }
// const deleteTask = async(id) =>{
//   await fetch(`http://localhost:8000/task/${id}`, {method:'DELETE',})
//   setTasks(
//     tasks.filter((task)=> task.id !== id)
//   )
// }
const deleteTask = async(id)=>{
  await fetch(`http://localhost:8000/task/${id}`, { method:"DELETE", })
  setTasks(
    tasks.filter((item)=> item.id !== id)
  )
}
// const AddTask = (task) => {
//    const id = Math.floor(Math.random()*1000)+1;
//  const newTask = {id, ...task};
//  setTasks([...tasks, newTask]);
stackblitz
// }
const AddTask = async (task) => {
   const result = await fetch("http://localhost:8000/task", {
     method:"POST",
     headers:{'Content-type':"application/json"},
     body:JSON.stringify(task)
   })
   const data = await result.json();
   setTasks([...tasks, data]);
}
// const AddTask = async (task) => {
//   const result = await fetch("http://localhost:8000/task",{
//     method:"POST",
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify(task)
//   })
//   const data = await result.json()
//   setTasks([...tasks, data]);
// }
  return (
    <div>
        <Header
        showAddForm = {showAddForm}
    
        onAdd = {()=> setshowAddForm(!showAddForm)}
        title="now it works" content="first meeting with john" />
        {showAddForm && <AddTasks onAdd={AddTask} /> }
        
        {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}
        {tasks.length > 0 ? (<Tasks onDelete={deleteTask} onDoubleClick={onToggle} tasks={tasks} />)
        : ( 'no list')}

    </div>
  );
}

export default App;