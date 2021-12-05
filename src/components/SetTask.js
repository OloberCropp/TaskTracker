import PropTypes from 'prop-types';
import InputForm from './InputForm';

const SetTask = ({title}) => {
    return (
        <div className='IF'>
            <h2>{title}</h2>
            <InputForm preInput='Heyo' type='text' placeholder='Wash a car' />
            <InputForm preInput='Heyo' type='date'/>
        </div>
    )
}

SetTask.defaultProps = {
    title: 'HEYO BITCHES!!'
}

export default SetTask
