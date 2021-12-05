function Header( props ) {
    return (
        <header>
            <nav className='container'>
                <div className="logo">
                    <h1>HG</h1>
                </div>
                    <ul className="nav-links">
                        <li>{props.title}</li>
                        <li>{props.title1}</li>
                        <li>{props.title2}</li>
                        <li>{props.title3}</li>
                    </ul>
            </nav>
        </header>
    )
}


Header.defaultProps = {
    title: 'home',
    title1: 'about us',
    title2: 'friends',
    title3: 'my profile'
}

export default Header
