import PropTypes from 'prop-types'


const Button = ({color, liInner, onClick}) => {
    return (<li onClick={onClick} style={{background:color}}>{liInner}</li>)}

Button.defaultProps = {
    color:'black',
}

Button.propTypes = {
    liInner: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
