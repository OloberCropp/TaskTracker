import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content container">
                <h2>InNomineDeorum™</h2>
                <div>
                    <h3>PointInGrave@gmail.com</h3>
                    <Link to='./about'>About</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
