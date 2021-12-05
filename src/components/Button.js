import PropTypes from 'prop-types'


const Button = ({color, liInner, onClick}) => {
    return (<button className='btn' onClick={onClick} style={{background:color}}>{liInner}</button>)}

Button.defaultProps = {
    color:'#000e',
}

Button.propTypes = {
    liInner: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
