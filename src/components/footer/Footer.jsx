import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import "./Footer.css"
export const Footer=()=>{


    return (<div className="footer-container">
<div className="footer-heading"><h1>The boba way India</h1></div>        
<div className="footer-boba-info"><p>The boba way was started by College friends diverse backgrounds,with a common love for boba! Combining their diverse backgrounds and a love for flavorful bubblel tea,our co-founders have handpicked the ingredients for a boba-tastic experience.</p></div>
<div className="footer-social-media">
    <div><FaFacebookF color="" /></div>
<div><FaTwitter /></div>
<div><FaLinkedinIn /></div>
<div><FaInstagram /></div>
</div>
<div className="footer-boba-timing">
    <p>HOURS</p>
    <p>Sunday to Satuerday:10AM-10PM</p>
</div>
<div className="footer-copyright">
    <div><p>Copyright 2023 thebobaway.com Design & Develop by Reclamehub</p></div>
    <div><p>Privacy Policy *Terms of service</p></div>
</div>
    </div>)
}