import { ContactPage } from "./ContactPage"
import "./HomePage.css"
import { InstagramPage } from "./InstagramPage"
import { SliderHome } from "./SliderHome"
import loveboba from '../../assets/Images/loveboba.png';
import map from '../../assets/Images/map1.png';
export const HomePage=()=>{



    return (<div>

        {/* home page part 1 */}
        <div className="home-part-1">
            <div className="home-part-1-text">
            <p>everyone's favorite classic bubble tea</p>
            <h1>the authentic bubble tea experience with the boba way</h1>
            </div>
            <div className="home-part-1-img">
                <img width={"100%"} height={"100%"} src="boba-cup-img.png"  alt="cup-img"/>
            </div>
        </div>
 {/* home page part two */}
<div className="home-page-part-2">
<div className="popular-boba-img"></div>
<div className="type-boba-box">
    <div className="popular-boba-text-img"><h1>Popular Boba  </h1></div>

    <div className="four-type-boba">
        <div><img src="bobatype-1.png" alt="bobatype" /></div>
        <div><img src="bobatype-2.png" alt="bobatype" /></div>
        <div><img src="bobatype-1.png" alt="bobatype" /></div>
        <div><img src="bobatype-1.png" alt="bobatype" /></div>
    </div>
</div>
</div>
<SliderHome />
<ContactPage />
<InstagramPage />
 <div className="love-tea-map">
    <div><img src={loveboba} alt="love-tea" /></div>
    <div><img src={map} alt="map" /></div>
 </div>
    </div>)
}