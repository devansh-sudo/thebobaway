import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import "./Sidebar.css"

import { Button, Drawer } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import {  Dropdown } from "antd";


// const items = [
//   {
//     key: '1',
//     label: (
//       <div className="handleOutlet"  style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
//         Outlets
//       </div>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <Link to="/happycustomer"  style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
//        Happy Customer
//       </Link>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <Link to="/special" style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
//         Special One
//       </Link>
//     ),
//   },
// ];


const Sidebar = () => {


  const handleOutlet=()=>{
    navigate("/outlet")
    setOpen(false)
  }

  const handleCustomer=()=>{
    navigate("/happycustomer")
    setOpen(false)
  }
  

  const items = [
    {
      key: '1',
      label: (
        <div onClick={handleOutlet}  style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
          Outlets
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div  onClick={handleCustomer} style={{textDecoration:"none",color:"orangered",fontWeight:"600",fontSize:"large"}}>
         Happy Customer
        </div>
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

const handleFranchise=()=>{
  navigate("/franchise")
  setOpen(false)
}

const handleContact=()=>{
  navigate("/contact")
  setOpen(false)
}

const handleMenu = () => {
  // window.open("menu.pdf", '_blank');
  navigate("/menu")
  setOpen(false)
};

// const handleMenu=()=>{
//   navigate("/menu")
//   setOpen(false)
// }
  return (
    <div style={{color:"white"}}>
      <Button type="primary" className="nav-sidebar-button"  onClick={showDrawer}>
      <GiHamburgerMenu color="white"  size={25} />
      </Button>
      <Drawer title="Welcome" color="white" width="180px" style={{height:"100vh",backgroundColor:"#fe611d",color:"white"}}  placement="right"  onClose={onClose} open={open}>
        <div className="nav-slide-option" onClick={handleAbout} ><p>About Us</p></div>
        <div className="nav-slide-option" onClick={handleFranchise}><p>Franchise</p></div>
        <div className="nav-slide-option">
          {/* <select className="nav-slide-explore">
            <option className="nav-selector-option" >Explore</option>
            <option className="nav-selector-option" onClick={handleOutlet}>Outlets</option>
            <option className="nav-selector-option" onClick={handleCustomer}>Happy Customers</option>
            <option className="nav-selector-option" onClick={handleSpecial}>Special's Ones</option>
            <option className="nav-selector-option" onClick={handleAbout}>Press Release</option>
          </select> */}
                         <Dropdown menu={{ items }} arrow="true" placement="bottom" >
                   <div   style={{backgroundColor:"transparent",border:"none",outline:"none",fontWeight:"600"}}>Explore</div>
      </Dropdown>    
        </div>
        <div className="nav-slide-option" onClick={handleMenu}><p>Menu</p></div>
        <div className="nav-slide-option" onClick={handleContact}><p>Contact Us</p></div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
