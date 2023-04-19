
import "./Navbar.css"

// import "logo-boba.png"
export const Navbar = () => {



    return (
        <div className="nav-home" >
            <div >
                <img className="logo" src="logo-boba.png" alt="logo-icon" />
            </div>
            <div className="all-section">
                <div className="nav-text" >About Us</div>
                <div className="nav-text"  >Explore</div>
                <div className="nav-text"  >Become A franchise Owner</div>
                <div className="nav-text" >Menu</div>
                <div className="nav-contact nav-text">Connect Us</div>
            </div>
        </div>
    )
}