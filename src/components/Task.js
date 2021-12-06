import {FaSkullCrossbones} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <h3>
                {task.text} 
                <FaSkullCrossbones style={FaSkullStyle} onClick={()=>onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

const FaSkullStyle = {
    color:'red', 
    alignItems:'right', 
    marginTop:'1rem', 
    fontSize:'1rem',
    cursor:'pointer',
    padding:'.1rem',
}

export default Task
