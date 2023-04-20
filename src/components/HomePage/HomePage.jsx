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


export const HomePage=()=>{


    return (
        <div style={{backgroundColor:'#fff'}} >
            <div   >
                
                {/* home page part 1 */}
                <div className="home-part-1" style={{height:'40vh' }} >
                    <div className="home-part-1-text">
                        {/* <p >everyone's favorite classic bubble tea</p> */}
                        <h1>the authentic bubble tea experience with the boba way</h1>
                    </div>
                    <div className="home-part-1-img">
                        <img style={{ height: 426, width: 490,marginTop:10,boxShadow:"0px 5px 0px" }} src="image-36@2x.png" alt="cup-img" />
                    </div>
                </div>
                {/* home page part two */}
                <div className="home-page-part-2"  style={{ backgroundImage: "url(image-29@2x.png)",bottom:300,marginTop:"220px" }} >
                    <div className="popular-boba-img">
                        <img height={"100%"} width={"100%"} src="bobaType1.png" />
                        </div>
                    <div className="type-boba-box">
                    <img className="popular-boba" src="img30.png" />
                        <div className="four-type-boba">
                            <div><img src="bobatype-1.png" alt="bobatype" /></div>
                            <div><img src="bobatype-2.png" alt="bobatype" /></div>
                            <div><img src="bobatype-1.png" alt="bobatype" /></div>
                            <div><img src="bobatype-1.png" alt="bobatype" /></div>
                        </div>
                    </div>
                </div>
            </div>

<SliderHome />

<ContactPage />
<ProductGrid />
{/* <Gallery /> */}
<InstagramPage />
 <div className="love-tea-map img-fluid">
    <div><img src="image-45.png" alt="love-tea" /></div>
    <div><BobaMap /></div>
 </div>
    </div>)
}