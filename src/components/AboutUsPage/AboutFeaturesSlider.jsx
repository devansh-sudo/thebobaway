// import instaImage from '../../assets/Images/InstaImage.png';
"happy-1.jpg"
"happy-2.jpg"
"happy-3.jpg"
"happy-4.jpg"
"happy-5.jpg"

import { BsShieldCheck } from "react-icons/bs"
import { MdCategory } from "react-icons/md"
import { GiPiggyBank } from "react-icons/gi"

import { Link } from "react-router-dom"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./AboutFeaturesSlider.css";
// // import { div, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [

  {
    id: 1,
    img: "shield.png",
head:"Premium Quality",
text:"Lorem Ipsum has Been The Industry's standard Dummy Text ever Since"
  },
  {
    id: 2,

    img: "ring.png",
    head:"25+ Varieties",
    text:"Lorem Ipsum has Been The Industry's standard Dummy Text ever Since"
  },
  {
    id: 3,
    img: "pig.png",
    head:"Pocket Friendly rate",
    text:"Lorem Ipsum Has Been The Industry's Standrad Dummy Text Ever Since"

  },
  {
    id: 4,
    img: "shield.png",
head:"Premium Quality",
text:"Lorem Ipsum has Been The Industry's standard Dummy Text ever Since"
  },
  {
    id: 5,

    img: "ring.png",
    head:"25+ Varieties",
    text:"Lorem Ipsum has Been The Industry's standard Dummy Text ever Since"
  },
  {
    id: 6,
    img: "pig.png",
    head:"Pocket Friendly rate",
    text:"Lorem Ipsum Has Been The Industry's Standrad Dummy Text Ever Since"

  },

];

const breakPoints = 
[
  { width: 1, itemsToShow: 1, pagination: false,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

]
},
  { width: 1200, itemsToShow: 3, pagination: false }
];


 const AboutFeaturesSlider = () => {

  return (
    <div className="about-features-slide-div" >
      
      <div  >
        <Carousel infiniteLoop={"true"} autoPlaySpeed={4000} breakPoints={breakPoints}>
          {homeData?.map((el) => (
            
              <div key={el.id} style={{height:"240px",margin:"5px"}}>
        <div className="about-slide-div"  style={{height:"240px"}}>
                    <div>
                <img className="img-icon" src={el.img} />  
                </div>
                <div>                
                  <h1 style={{color:"black",fontSize:"20px"}} >{el.head}</h1>
                  </div>
                  <div>
                  <p>{el.text}</p>
                  </div>
                
                </div>
              </div>
            
          ))}
        </Carousel>
      </div>
      
    </div>
  );
}

export default AboutFeaturesSlider