import PropTypes from 'prop-types';


const InputForm = ({preInput, type, placeholder}) => {
    return (
        <>
            <h3>{preInput}</h3>
            <input className='task-input' type={type} placeholder={placeholder} />
        </>
    )
}

InputForm.propTypes = {
    preInput: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
}

export default InputForm
