import { BobaMap } from "../HomePage/BobaMap"
import { ContactUsPageForm } from "./ContactUsPageForm"
import "./ContactUsPage.css"
import { Image } from "react-bootstrap"


export const ContactUsPage=()=>{


    return (<div className="contact-page-container">

<div className="contact-top-container">
    <div className="contact-top-col-left" >
<div className="co-icon-text-container">
    <div><Image src="contact-location.png" /></div>
    <div className="co-heading-text-container">
        <p className="co-left-heading" >LOCATION</p>
        <p>3/4,Laxmi Enclave 2,Gajera Circle,Katargam,Surat</p>
    </div>
</div>

<div className="co-icon-text-container">
    <div><Image src="contact-phone.png" /></div>
    <div className="co-heading-text-container">
        <p className="co-left-heading" >PHONE</p>
        <p>+91 9518785637</p>
    </div>
</div>
<div className="co-icon-text-container">
    <div><Image src="contact-mail.png" /></div>
    <div className="co-heading-text-container">
        <p className="co-left-heading">EMAIL ADDRESS</p>
        <p>bobatheway@gmail.com</p>
    </div>
</div>
    </div>
    <div className="contact-top-col-right">
        <ContactUsPageForm />
    </div>
</div>
        <div className="contact-us-map">
        <BobaMap className="contact-page-map" />
        </div>
        
    </div>)
}