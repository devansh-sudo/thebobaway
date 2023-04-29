import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import "./Sidebar.css"

import { Button, Drawer } from 'antd';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" className="nav-sidebar-button"  onClick={showDrawer}>
      <GiHamburgerMenu color="white"  size={25} />
      </Button>
      <Drawer title="Welcome" width="180px" style={{height:"260px",backgroundColor:"#fe611d"}}  placement="right"  onClose={onClose} open={open}>
        <div className="nav-slide-option"><p>About Us</p></div>
        <div className="nav-slide-option"><p>Franchise</p></div>
        <div className="nav-slide-option">
          <select className="nav-slide-explore">
            <option className="nav-selector-option">Explore</option>
            <option className="nav-selector-option">Outlets</option>
            <option className="nav-selector-option">Happy Customers</option>
            <option className="nav-selector-option">Special's Ones</option>
            <option className="nav-selector-option">Press Release</option>
          </select>
        </div>
        <div className="nav-slide-option"><p>Menu</p></div>
        <div className="nav-slide-option"><p>Contact Us</p></div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
