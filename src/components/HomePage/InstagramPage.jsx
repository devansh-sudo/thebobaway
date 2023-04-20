// import instaImage from '../../assets/Images/InstaImage.png';
"happy-1.jpg"
"happy-2.jpg"
"happy-3.jpg"
"happy-4.jpg"
"happy-5.jpg"

import {Link} from "react-router-dom"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./InstagramPage.css";
// // import { div, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  
  {
    id: 1,
    img: "insta-1.jpg",
    
  },
  {
    id: 2,
    
    img: "insta-2.jpg",
    
    },
  {
    id: 3,
    img: "insta-3.jpg",
    
    
  },
  {
    id: 4,
    img: "insta-4.jpg",
    
    
  },
  {
    id: 5,
    img: "insta-1.jpg",
    
  },
{
    id: 6,
    
    img: "insta-2.jpg",
    
    },
  {
    id: 7,
    img: "insta-3.jpg",
    
    
  },
  {
    id: 8,
    img: "insta-4.jpg",
    
    
  }
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 1200, itemsToShow: 3, pagination: false }
];


export const InstagramPage=()=>{

    return (
            <div  style={{paddingTop:"30px",marginBottom:"20px"}}>
<h1 style={{textAlign:"center",fontSize:"50px"}}>Follow us on Instagram</h1>        
              <div style={{height:"400px"}} >
                <Carousel  infiniteLoop={"true"} autoPlaySpeed={4000} breakPoints={breakPoints}>
                  {homeData?.map((el) => (
                    <Link style={{textDecoration:"none"}} to="">
                      <div key={el.id} style={{width:'422px',height:'400px',display:'flex',gap:"10px"   ,boxShadow:'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', cursor:"pointer"}}>
                        <div style={{height:'400px', width:'422px'}} >
                          <img src={el.img} alt="carousel-img" height={'100%'} width={'100%'}  style={{padding:"10px"}} />
                        </div>
        
        
                        
                      </div>
                    </Link>
                  ))}
                </Carousel>
              </div>
              <button className="insta-follow-btn" ><a className="insta-follow-link"  href="https://instagram.com/thebobawayindia?igshid=YmMyMTA2M2Y=">FOLLOW</a></button>
            </div>
          );
}

