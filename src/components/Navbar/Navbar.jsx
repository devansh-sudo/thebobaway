import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-home">
      <div>
        <Link to="/">
          <img className="logo" src="logo-boba.png" alt="logo-icon" />
        </Link>
      </div>
      <div className={`all-section ${isOpen ? "show-menu" : ""}`}>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="nav-text">About Us</div>
        </Link>
        <div className="nav-text">Explore</div>
        <div className="nav-text">Franchise</div>
        <div className="nav-text">Menu</div>
        <div className="nav-contact nav-text">
          <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
            Connect Us
          </a>
        </div>
        

      </div>
     <div className="nav-burger"><GiHamburgerMenu size={25} /></div>
    </div>
  );
}
