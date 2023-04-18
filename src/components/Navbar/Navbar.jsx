
import "./Navbar.css"

// import "logo-boba.png"
export const Navbar = () => {



    return (<div className="nav-home">
        <div className="nav-logo"><img height={"100%"} width={"80%"}  src="logo-boba.png" alt="logo-icon" /></div>
        <div className="all-section">
            <div style={{marginTop:"2%"}}>About Us</div>
            {/* <div>
                <select id="nav-explore">
                    <option>Explore</option>
                </select>
            </div> */}
            <div style={{marginTop:"2%"}}>Explore</div>
            <div style={{marginTop:"2%"}}>Become A franchise Owner</div>
            <div style={{marginTop:"2%"}}>Menu</div>
            <div className="nav-contact">Connect Us</div>
        </div>
    </div>)
}