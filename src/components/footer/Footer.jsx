import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import "./Footer.css"
export const Footer=()=>{
 return (<div className="footer-container" style={{backgroundImage:`url("footer.png")`}}>
{/* left part for footer */}
<div className="footer-left-part">
<div className="footer-heading"><h1>The Boba way India</h1></div>        

<br />
<div className="footer-boba-info"><p>The Boba way was started by College friends from diverse backgrounds,with a common love for boba! Combining their diverse backgrounds and a love for flavorful bubblel tea,our co-founders have handpicked the ingredients for a boba-tastic experience.</p></div>
<br />
<br />
<div className="footer-social-media">
    <div><a style={{textDecoration:"none",color:"white"}} href="https://m.facebook.com/people/The-Boba-Way-India/100083239663402/"><FaFacebookF color="" /></a></div>
<div><FaTwitter /></div>
<div><FaLinkedinIn /></div>
<div> <a style={{textDecoration:"none",color:"white"}} href="https://instagram.com/thebobawayindia?igshid=YmMyMTA2M2Y="><FaInstagram /></a></div>
</div>
<br />
<br />
<div className="copy-right-reclame"><p>Copyright Ⓒ 2023 thebobaway.com Design & Develop by <a style={{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)"}} href="https://reclamehub.com/index.html"  >Reclamehub</a></p></div>
</div>
{/* right part of footer */}
<div className="footer-right-part">
    <div className="footer-category">
        <div className="resources">
<p className="category-footer-heading">Resources</p>

<p>Blog</p>
<p>Franchise</p>
<p>Menu</p>
        </div>
        <div className="company">
        <p className="category-footer-heading"> Company</p>

<p>About Us</p>
<p>Press</p>
<p>FAQs</p>
<p>Contact us</p>
        </div>
        
    </div>
    <br />
<div className="footer-boba-timing">
    <p>HOURS</p>
    <p>Sunday to Satuerday:10AM-10PM</p>
</div>
<div className="footer-copyright">
    <div><p>Privacy Policy · Terms of service</p></div>
</div>
</div>
    </div>)
}