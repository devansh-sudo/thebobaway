import { useState } from "react";

import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import { Button, Dropdown } from "antd";


const items = [
  {
    key: '1',
    label: (
      <Link to="/outlet"  style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
        Outlets
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/happycustomer" style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
       Happy Customer
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="/special" style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
        Special One
      </Link>
    ),
  },
];



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
console.log(window.innerWidth)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
    const openPDF = () => {
      window.open("menu.pdf", '_blank');
    };
    const [selectedOption, setSelectedOption] = useState('/');
    const navigate = useNavigate();
  
    const handleOptionChange = (event) => {
      const selectedOption = event.target.value;
      setSelectedOption(selectedOption);
      navigate(selectedOption);
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
  {/* <div className="nav-text"><select id="for-hover"   value={selectedOption}
        onChange={handleOptionChange} style={{textDecoration:"none",border:"none",border:"1px solid red",fontWeight:"600",maxWidth:"95px",backgroundColor:"transparent",textOverflow:"true"}}> 
  <option value="">Explore </option> 
 <option value="/outlet"> Outlets</option>
  <option value="/happycustomer">  Happy Customers </option>
  <option value="/special"> Special'sOne  </option>
          </select></div>  */}
                   <Dropdown menu={{ items }} arrow="true" placement="bottom" >
                   <Button  id="for-hover" className="nav-text" style={{backgroundColor:"transparent",border:"none",outline:"none",fontWeight:"600"}}>Explore</Button>
      </Dropdown>
             
             <Link to="/franchise" style={{textDecoration:"none"}}><div className="nav-text" id="for-hover" >  Franchise</div></Link>
        <Link style={{textDecoration:"none"}}><div className="nav-text" onClick={openPDF} id="for-hover">Menu</div></Link>
        <Link to="/contact" style={{textDecoration:"none"}}><div className="nav-contact nav-text" id="for-hover">
            Connect Us
        </div>
        </Link>

      </div>
     <div className="nav-burger"><Sidebar /></div>
    </div>
  );
}
