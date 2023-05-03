// import instaImage from '../../assets/Images/InstaImage.png';
"happy-1.jpg"
"happy-2.jpg"
"happy-3.jpg"
"happy-4.jpg"
"happy-5.jpg"

import { Link } from "react-router-dom"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./InstagramPage.css";
// // import { div, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [

  {
    id: 1,
    img: "mhappy1.png",

  },
  {
    id: 2,

    img: "mhappy2.png",

  },
  {
    id: 3,
    img: "mhappy3.png",


  },
  {
    id: 4,
    img: "mhappy4.png",


  },
  {
    id: 5,
    img: "mhappy5.png",

  }

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


export const HappyCustomerPage = () => {

  return (
    <div className="insta-div" >
      
      <div  >
        <Carousel infiniteLoop={"true"} autoPlaySpeed={4000} breakPoints={breakPoints}>
          {homeData?.map((el) => (
            <Link >
              <div key={el.id} >
                <div className="insta-img-div" >
                  <img src={el.img} alt="carousel-img" height={'100%'} width={'100%'}  />
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      
    </div>
  );
}

