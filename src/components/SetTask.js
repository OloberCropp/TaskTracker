import PropTypes from 'prop-types';
import { useState } from 'react';

const SetTask = ({onAdd}) => {

	const [text, setText] = useState('');
	const [day,setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if(!text){
			alert('Please fill all fields before submit');
			return;
		}

		onAdd({ text, day, reminder });

		setText('');
		setDay('');
		setReminder(false);

	}
   
	return (
		<form className='add-form container' onSubmit={onSubmit} >
			<div className='form-control'>
				<label>Task</label>
				<input type="text" 
					placeholder='Add a new Task' 
					value={text} 
					onChange={(e)=>setText(e.target.value)} 
				/>
			</div>
			<div className='form-control'>
				<label>Day & Time</label>
				<input type='datetime-local' 
					placeholder='Add Day & Time' 
					value={day} 
					onChange={(e)=>setDay(e.target.value)} 
				/>
			</div>
			<div className='form-control'>
				<label>Set Reminder</label>
				<input type="checkbox" 
					placeholder='Add a new Task' 
					checked={reminder} 
					value={reminder} 
					onChange={(e)=>setReminder(e.currentTarget.checked)} 
				/>
			</div>

			<input type="submit" value='Confirm Task' className='btn btn-block' />
		</form>
	)
}

SetTask.defaultProps = {
    title: 'Create a new task here',
}

SetTask.propTypes = {
    title: PropTypes.string,
}

export default SetTask
