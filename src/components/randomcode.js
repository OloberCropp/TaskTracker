import { useState } from 'react';

const [tasks, setTasks] = useState([
    {
      id:1,
      text:'Doctors Appointment',
      day:'feb 5th at 2:30pm',
      reminder: true
    },
    {
      id:2,
      text:'Meeting at school',
      day:'feb 6th at 12:05am',
      reminder: true
    },
    {
      id:3,
      text:'Food shopping',
      day:'feb 5th at 7:30pm',
      reminder: true
    }
  ])
