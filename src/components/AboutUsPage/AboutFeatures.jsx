import { BsShieldCheck } from "react-icons/bs"
import { MdCategory } from "react-icons/md"
import { GiPiggyBank } from "react-icons/gi"
import "./AboutFeatures.css"
export const AboutFeatures=()=>{
return (<div>
<div className="about-us-container-part-2"  >
            <div className="about-features-heading-button">
                <div >
                    <h1 className="about-part-2-heading">Special Features that will make you Happy & Cheer Up! </h1></div>
                <div className="about-part-2-button"><button className="about-btn" >See More</button></div>
            </div>

            <div className="about-features-section">
                <div className="about-features-section-single-div">
                    <div className="about-icon-div" style={{paddingLeft:"3vw"}}> <BsShieldCheck size="7vw" color="#fe611d" /></div>
                    <div>
                        <p className="about-icon-heading">Premium Quality</p>
                        <p className="about-icon-text">Lorem Ipsum has Been The Industry's standard Dummy Text ever Since</p>
                    </div>
                </div>
                <div className="about-features-section-single-div"  >
                    <div className="about-icon-div" style={{borderLeft:"2px solid gray",paddingLeft:"2vw"}}>
                        <MdCategory size="7vw" color="#fe611d" /> </div>
                    <div >
                        <p className="about-icon-heading" >25+ Varieties </p>
                        <p className="about-icon-text">Authentic & Flavourful Drinks</p>
                    </div>
                </div>
                <div className="about-features-section-single-div">
                    <div className="about-icon-div" style={{borderLeft:"2px solid gray",paddingLeft:"2vw"}}>
                        <GiPiggyBank size="7vw" color="#fe611d" /></div>
                    <div>
                        <p className="about-icon-heading">Pocket Friendly rate</p>
                        <p className="about-icon-text">Lorem Ipsum Has Been The Industry's Standrad Dummy Text Ever Since</p>
                    </div>
                </div>
            </div>

        </div>

</div>)

}