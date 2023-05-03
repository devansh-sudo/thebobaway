import { ContactPage } from "./ContactPage"
import {Container,Row,Col} from "react-bootstrap"
import "./HomePage.css"

import { InstagramPage } from "./InstagramPage"
import { SliderHome } from "./SliderHome"
import loveboba from '../../assets/Images/loveboba.png';
import map from '../../assets/Images/map1.png';
import { Navbar } from "../Navbar/Navbar";
import { BobaMap } from "./BobaMap";
import { ProductGrid } from "./ProductGrid";
import { Gallery } from "./Gallery";
import TestiMonials from "../locationSlider/TestiMonials"
import { HappyCustomerPage } from "./HappCustomerSlide"


export const HomePage = () => {
    return (
       
<>
                {/* home page part 1 */}
                <Container className="home-part-1-container g-0 " >
                    <Row>
                        <Col className="left_col1">
                        <div className="home-part-1-text">
                        <p className="text-the-auth">The Authentic</p>
                        <p className="text-bubble">Bubble Tea Experience With</p>
                        <p className="text-bobaway">The Boba Way</p>
                    </div>
                    </Col>
                    <Col className="right_col1">
                    <div>
                        <img className="home-part-1-img img-fluid" src="image-36@2x.png" alt="cup-img" />
                    </div>
                    </Col>
                    </Row>
                    
                </Container>
                    
                {/* home page part two */}
                <Container className="home-page-part-2 g-0" >
                    <Row>
                        <Col  className="left_col2">
                        <div >
                        <img className="popular-boba-img img-fluid" src="bobaType1.png" />
                    </div>
                        </Col>
                        
                        <Col className="right_col2">
                    <div className="type-boba-box">
                        <div style={{textAlign:"center"}}>
                            <img className="popular-boba-text img-fluid" src="img30.png" />
                            </div>
                        <div className="four-type-boba-div">
                            <div><img className="bobatype_img img-fluid" src="bobatype-1.png" alt="bobatype" /><p className="boba-type-text" >Berry - Hazelnut</p></div>
                            <div><img className="bobatype_img img-fluid" src="bobatype-2.png" alt="bobatype" /><p className="boba-type-text">Soothing Blueberry</p></div>
                            <div><img className="bobatype_img img-fluid" src="bobatype-3.png" alt="bobatype" /><p className="boba-type-text">Chocolate Delight</p></div>
                            <div><img className="bobatype_img img-fluid" src="bobatype-4.png" alt="bobatype" /><p className="boba-type-text">Strawberry Sparkle</p></div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                      
                    </Container>
                              
            {/* <SliderHome /> */}
<div className="outlet-div-container">
    
    <TestiMonials></TestiMonials>
    
    </div>
            <ContactPage />

            <ProductGrid />
            {/* <Gallery /> */}

            
            <InstagramPage />
            <div className="boba-location" style={{ backgroundImage: `url("mapbg.png")` }}><BobaMap /></div>
</>
        )
}
             
                   

