import PropTypes from 'prop-types';
import Button from './Button';
import InputForm from './InputForm';

const SetTask = ({title}) => {
    const onClick = (e) => {
        // console.log(e.nativeEvent.path[1].children[2].value);
        console.log(e);
    }
    return (
        <div className='IF container'>
            <h2 className='if-title'>{title}</h2>
            <InputForm preInput='Add a new task' type='text' placeholder='Wash a car' />
            <InputForm preInput='Add date/time' type='datetime-local' />
            <Button liInner='submit' onClick={onClick} color='rgba(255, 217, 0, 0.3)' />
        </div>
    )
}

SetTask.defaultProps = {
    title: 'Create a new task here',
}

SetTask.propTypes = {
    title: PropTypes.string,
}

export default SetTask
