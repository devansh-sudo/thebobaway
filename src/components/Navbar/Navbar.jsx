import "./Navbar.css"
// import "logo-boba.png"
export const Navbar = () => {



    return (<div className="nav-home">
        <div className="nav-logo"><img height={"100%"} width={"90%"}  src="logo-boba.png" alt="logo-icon" /></div>
        <div className="all-section">
            <div>About us</div>
            <div>
                <select id="nav-explore">
                    <option>Explore</option>
                </select>
            </div>
            <div>Become a Owner</div>
            <div>Menu</div>
            <div className="nav-contact">Connect Us</div>
        </div>
    </div>)
}