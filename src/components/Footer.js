import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h2>InNomineDeorumâ„¢</h2>
                <div>
                    <h3>PointInGrave@gmail.com</h3>
                    <Link to='./about'>About</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
