import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SetTask from './components/SetTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Fuckery-Fuckery',
        day:'feb 5th at 2:30pm',
        reminder: false
      },
      {
        id:2,
        text:'Eatery-Eatery',
        day:'feb 6th at 12:05am',
        reminder: false
      },
      {
        id:3,
        text:'Sleepery-Sleepery',
        day:'feb 5th at 7:30pm',
        reminder: true
      }
])

const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1;
  const newTask = {id, ...task}
  setTasks([ ...tasks, newTask ]);
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id ));
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="App">
      <Header />
      <SetTask onAdd={addTask} />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : <h2 className='tasks container' style={{textAlign:'center', color:'rgb(256, 256, 256, .4)'}} >There's no tasks yet.. 
      <br /> Add new one with a form above!</h2>}
      <Footer />
    </div>
  );
}

export default App;
