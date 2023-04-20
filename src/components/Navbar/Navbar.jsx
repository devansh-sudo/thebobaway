
import { Link } from "react-router-dom"
import "./Navbar.css"

// import "logo-boba.png"
export const Navbar = () => {

    return (
        <div className="nav-home" >
            <div >
                <Link to="/"  ><img className="logo" src="logo-boba.png" alt="logo-icon" /></Link>
            </div>
            <div className="all-section">
                <Link to="/" style={{textDecoration:"none"}}><div className="nav-text">About Us</div></Link>
                <div className="nav-text">Explore</div>
                <div className="nav-text"  >Become A franchise Owner</div>
                <div className="nav-text" >Menu</div>
                <div className="nav-contact nav-text"><a href="#contact" style={{textDecoration:"none",color:"white"}}>Connect Us</a></div>
            </div>
        </div>
    )
}