import "./Outlets.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/Images/location1.png";
import celebrating from "../../assets/Images/location2.png";
import education from "../../assets/Images/location1.png";
import taken from "../../assets/Images/Group 8962.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];
const address=["a","b","c"]
const location=["a","b","c"]
function Outlets() {
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
    <div className="container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          <div></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Outlets;