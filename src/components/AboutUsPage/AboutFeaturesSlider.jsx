import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { BsShieldCheck } from "react-icons/bs"
import { MdCategory } from "react-icons/md"
import { GiPiggyBank } from "react-icons/gi"

const AboutFeaturesSlider = () => {
  return (
    <Carousel>
      <div>
      <BsShieldCheck size="7vw" color="#fe611d" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
      <BsShieldCheck size="7vw" color="#fe611d" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
      <BsShieldCheck size="7vw" color="#fe611d" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default AboutFeaturesSlider;



// import Carousel from 'react-bootstrap/Carousel';
// import { BsShieldCheck } from "react-icons/bs"
// import { MdCategory } from "react-icons/md"
// import { GiPiggyBank } from "react-icons/gi"
// function AboutFeaturesSlider() {
//   return (
//     <Carousel style={{backgroundColor:"black"}}>
//       <Carousel.Item>
      
//         <Carousel.Caption>
//           <h3 style={{color:"black"}}>Premium Quality</h3>
//           <p>Lorem Ipsum has Been The Industry's standard Dummy Text ever Since</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <MdCategory size="7vw" color="#fe611d" />
//         <Carousel.Caption>
//           <h3>25+ Varieties </h3>
//           <p>Authentic & Flavourful Drinks</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
      
//         <Carousel.Caption>
//         <GiPiggyBank size="7vw" color="#fe611d" />
//           <h3>Pocket Friendly rate</h3>
//           <p>
//           Lorem Ipsum Has Been The Industry's Standrad Dummy Text Ever Since
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default AboutFeaturesSlide;