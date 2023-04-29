import "./Outlets.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/Images/location1.png";
import celebrating from "../../assets/Images/location2.png";
import education from "../../assets/Images/location1.png";
import taken from "../../assets/Images/Group 8962.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {CiShare1} from "react-icons/ci"

const images = [astronaut, celebrating, education, taken];
const address=["AUNDH,PUNE","PIMPLE SAUDAGAR,PUNE","KOTHRUD,PUNE","AUNDH,PUNE"]
const location=[`https://maps.app.goo.gl/HafU1LxyZH972pxR7`
,`https://maps.app.goo.gl/WgnwQ5pKYnwfCEet6`,`https://maps.app.goo.gl/G938Z5U9sDmEJtFn8`,`https://maps.app.goo.gl/HafU1LxyZH972pxR7`]

function Outlets() {
    const [count,setCount]=useState(0)
    const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


  return (
    <div className="location-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          <div id="share-location"><a href={location[idx]}><CiShare1  size="20" /></a></div>
          <div><h1>{address[idx]}</h1></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Outlets;