import {BsShieldCheck} from "react-icons/bs"
import {MdCategory} from "react-icons/md"
import {GiPiggyBank} from "react-icons/gi"
import "./AboutUsPage.css"

export const AboutUs=()=>{

    return (<div className="about-container">
    <div className="about-part-1-container" style={{backgroundImage:`url("aboutbg1.png")`}}>
<div className="about-boy-img"><img src="aboutimg1.png" alt="img" /></div>
<div className="about-intro-div">
{/* <h1 className="about-top-heading"> About Us</h1> */}
<div className="aboutheadingimg-div"><img src="aboutheadingimg.png" alt ="image" /></div>
<div><p className="about-top-info">The Boba Way was startted by the College friends from diverse backgrounds, with a common love for boba! Combining their diverse backgrounds and a love for flavourful Bubble Tea, our co-founders have handpicked the best ingredients for a boba-tastic experience.</p></div>
<div className="about-user-info">
    <div>
        <h1 className="about-user-number">150K</h1>
        <p className="about-user-number-text">NUMBER OF CUPS SERVED</p>
    </div>
    <div>
        <h1 className="about-user-number">40K</h1>
        <p className="about-user-number-text">HAPPY CUSTOMERS</p>
    </div>
    </div>    
    <div className="chock-2-boba-img">
        <img src="boba-chock-white.png" alt="img" /></div>
</div>

    </div>
    <div className="about-us-container-part-2"  >
<div className="about-features-heading-button">
    <div className="about-part-2-heading"><h1>Special Features that will make you Happy & Cheer Up! </h1></div>
    <div className="about-part-2-button"><button className="about-btn" >See More</button></div>
</div>

<div className="about-features-section">
    <div className="about-features-section-single-div">
        <div className="about-icon-div"> <BsShieldCheck size="10vw" color="#fe611d" /></div>
        <div>
            <p className="about-icon-heading">Premium Quality</p>
            <p className="about-icon-text">Lorem Ipsum has Been The Industry's standard Dummy Text ever Since</p>
        </div>
    </div>
    <div className="about-features-section-single-div" >
    <div className="about-icon-div"><MdCategory size="10vw" color="#fe611d"/> </div>
        <div >
            <p className="about-icon-heading" >25+ Varieties </p>
            <p className="about-icon-text">Authentic & Flavourful Drinks</p>
        </div>
    </div>
    <div className="about-features-section-single-div">
    <div className="about-icon-div"><GiPiggyBank size="10vw" color="#fe611d"/></div>
        <div>
            <p className="about-icon-heading">Pocket Friendly rate</p>
            <p className="about-icon-text">Lorem Ipsum Has Been The Industry's Standrad Dummy Text Ever Since</p>
        </div>
    </div>
</div>

    </div>
    <div></div>
    </div>)
}