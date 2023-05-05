
import Image from 'react-bootstrap/Image'
import "./AboutUsPage.css"
import { AboutFeatures } from "./AboutFeatures"
import { FounderMsg } from './FounderMsg'

import AboutFeaturesSlider from './AboutFeaturesSlider'

export const AboutUs = () => {

    return (<div className="about-container">
        <div className="about-part-1-container" style={{ backgroundImage: `url("aboutbg1.png")` }}>
            <div className="about-boy-img"><img src="aboutimg1.png" alt="img" /></div>
            <div className="about-intro-div">
                {/* <h1 className="about-top-heading"> About Us</h1> */}
                <div className="aboutheadingimg-div"><img src="aboutheadingimg.png" alt="image" /></div>
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
                    <Image src="boba-chock-white.png"  className='img-abt-two-chock img-fluid' fluid="true" alt="img" />
                    </div>
            </div>

        </div>
        
        <AboutFeatures />
<AboutFeaturesSlider />
        <FounderMsg />
    </div>)
}