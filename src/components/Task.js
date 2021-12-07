import {FaSkullCrossbones} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'remind' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
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
    margin:'1rem 1rem 0 0 ',
    fontSize:'1.5rem',
    cursor:'pointer',
}

export default Task
