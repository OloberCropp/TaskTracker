import PropTypes from 'prop-types';
import Button from "./Button";

function Header({logotype}) {
    const onClick = ()=> {
        console.log('click');
    }
    return (
        <header>
            <nav className='container'>

                <h1 className="logo">{logotype}</h1>

                <div className="nav-links">
                    <Button liInner='home' onClick={onClick} />
                    <Button liInner='about us' onClick={onClick} />
                    <Button liInner='friends' onClick={onClick} />
                    <Button liInner='my profile' onClick={onClick} />
                </div>

            </nav>
        </header>
    )
}

Header.defaultProps = {
    logotype: 'HG',
}

Header.propTypes = {
    logotype: PropTypes.string.isRequired,
}



export default Header
