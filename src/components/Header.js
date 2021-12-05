import Button from "./Button";

function Header() {
    return (
        <header className='container'>
            <div className="logo">
                <h1>HG</h1>
            </div>
                <ul className="nav-links">
                    <Button liInner='home' />
                    <Button liInner='about us' />
                    <Button liInner='friends' />
                    <Button liInner='my profile' />
                </ul>
        </header>
    )
}


export default Header
