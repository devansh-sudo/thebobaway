import { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
console.log(window.innerWidth)
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
      <div className={`all-section ${isOpen ? "show-menu" : ""}`} >
        <Link to="/about" style={{textDecoration:"none"}}>
          <div className="nav-text" id="for-hover">About Us</div>
        </Link>
        <div className="nav-text">Explore</div>
        <div className="nav-text" > <a href="#contact"  id="for-hover" style={{ textDecoration: "none"  }}>Franchise</a></div>
        <div className="nav-text">Menu</div>
        <div className="nav-contact nav-text">
          <a href="#contact" id="for-hover" style={{ textDecoration: "none"  }}>
            Connect Us
          </a>
        </div>
        

      </div>
     <div className="nav-burger"><Sidebar /></div>
    </div>
  );
}
