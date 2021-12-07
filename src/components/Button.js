import PropTypes from 'prop-types'


const Button = ({color, liInner, onClick}) => {
    return (<button className='btn' onClick={onClick} style={{background:color}}>{liInner}</button>)}

Button.defaultProps = {
    color:'rgb(60, 0, 123, .5)',
}

Button.propTypes = {
    liInner: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
