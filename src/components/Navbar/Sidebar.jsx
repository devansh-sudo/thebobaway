import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import "./Sidebar.css"

import { Button, Drawer } from 'antd';
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [open, setOpen] = useState(false);
const navigate=useNavigate()
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

const handleAbout=()=>{
  navigate("/about")
  setOpen(false)
}

  return (
    <div style={{color:"white"}}>
      <Button type="primary" className="nav-sidebar-button"  onClick={showDrawer}>
      <GiHamburgerMenu color="white"  size={25} />
      </Button>
      <Drawer title="Welcome" color="white" width="180px" style={{height:"100vh",backgroundColor:"#fe611d",color:"white"}}  placement="right"  onClose={onClose} open={open}>
        <div className="nav-slide-option" onClick={handleAbout} ><p>About Us</p></div>
        <div className="nav-slide-option" onClick={handleAbout}><p>Franchise</p></div>
        <div className="nav-slide-option">
          <select className="nav-slide-explore" onClick={handleAbout}>
            <option className="nav-selector-option" onClick={handleAbout}>Explore</option>
            <option className="nav-selector-option" onClick={handleAbout}>Outlets</option>
            <option className="nav-selector-option" onClick={handleAbout}>Happy Customers</option>
            <option className="nav-selector-option" onClick={handleAbout}>Special's Ones</option>
            <option className="nav-selector-option" onClick={handleAbout}>Press Release</option>
          </select>
        </div>
        <div className="nav-slide-option" onClick={handleAbout}><p>Menu</p></div>
        <div className="nav-slide-option" onClick={handleAbout}><p>Contact Us</p></div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
