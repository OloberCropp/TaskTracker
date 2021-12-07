import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SetTask from './components/SetTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {

  const [tasks, setTasks] = useState([])
  
  useEffect(()=>{ fetchTasks() })

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    setTasks(data);
  }

  const fetchTask = async (id) =>{
    const res = await fetch('http://localhost:5000/tasks/'+id);
    const data = await res.json();
    return data;
  }
  
  const deleteTask = async (id) =>{
    await fetch('http://localhost:5000/tasks/'+id,
    {
      method: 'DELETE',
    });
  }
  
  const addTask = async (task) =>{
    await fetch('http://localhost:5000/tasks', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(task)
    });
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder};

    await fetch('http://localhost:5000/tasks/'+id,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updTask)
      }
    )
  }

  return (
    <div className="App">
      <Header />
      <SetTask onAdd={addTask} />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : <h2 className='tasks container' style={{textAlign:'center', color:'rgb(256, 256, 256, .4)'}} >
      There's no tasks yet.. 
      <br /> Add new one with a form above!</h2>}
      <Footer />
    </div>
  );
}

export default App;
