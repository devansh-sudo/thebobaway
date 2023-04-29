import { ContactPage } from "./ContactPage"
import "./HomePage.css"
import { InstagramPage } from "./InstagramPage"
import { SliderHome } from "./SliderHome"
import loveboba from '../../assets/Images/loveboba.png';
import map from '../../assets/Images/map1.png';
import { Navbar } from "../Navbar/Navbar";
import { BobaMap } from "./BobaMap";
import { ProductGrid } from "./ProductGrid";
import { Gallery } from "./Gallery";


export const HomePage = () => {

    return (
        <div  >
            <div  >

                {/* home page part 1 */}
                <div className="home-part-1" >
                    <div className="home-part-1-text">
                
                        <h1 className="text-the-auth">The Authentic</h1> 
                        <h1 className="text-bubble">Bubble Tea Experience With</h1>
                           <h1 className="text-bobaway">The Boba Way</h1>
                    </div>
                    <div className="home-part-1-img">
                        <img src="image-36@2x.png" alt="cup-img" />
                    </div>
                </div>
                {/* home page part two */}
                <div className="home-page-part-2" >
                    <div className="popular-boba-img">
                        <img src="bobaType1.png" />
                    </div>
                    <div className="type-boba-box">
                        <div><img className="popular-boba" src="img30.png" /></div>
                        <div className="four-type-boba">
                            <div>

                            <img src="bobatype-1.png" alt="bobatype" /><p className="boba-type-text" >Berry-Hazelnut</p></div>
                            <div><img src="bobatype-2.png" alt="bobatype" /><p className="boba-type-text">Soothing Blueberry</p></div>
                            <div><img src="bobatype-3.png" alt="bobatype" /><p className="boba-type-text">Chocolate Delight</p></div>
                            <div><img src="bobatype-4.png" alt="bobatype" /><p className="boba-type-text">Strawberry Sparkle</p></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <SliderHome /> */}

            <ContactPage />
    
            <ProductGrid />
            {/* <Gallery /> */}
            {/* <InstagramPage /> */}
{/* <div className="boba-location" style={{backgroundImage:`url("mapbg.png")`}}><BobaMap /></div> */}
        </div>)
}