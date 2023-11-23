import "./navbar.css";
import mainLogo from '../../assets/main-logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="container-fluid">
            <div className="container nav-group">

                <div className="main-logo">
                    <img src={mainLogo} alt="happyfam logo" className="img-fluid" />
                </div>
                <div className="link-group">
                    <Link href="/" className="link-item" >Home</Link>
                    <Link href="/" className="link-item" >Catalog</Link>
                    <Link href="/" className="link-item" >Shop</Link>
                    <Link href="/" className="link-item" >Contact</Link>
                </div>
                <div className="sign-group">
                    <button type="button" className="nav-signin-button"> Sign in</button>
                    <button type="button" className="nav-register-button">Register</button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;