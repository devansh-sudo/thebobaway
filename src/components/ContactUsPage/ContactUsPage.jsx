import { BobaMap } from "../HomePage/BobaMap"
import { ContactUsPageForm } from "./ContactUsPageForm"
import "./ContactUsPage.css"
import { Image } from "react-bootstrap"


export const ContactUsPage=()=>{


    return (<div>

<div className="contact-top-container">
    <div className="contact-top-col-left" >
<div>
    <div><Image /></div>
    <div>
        <p>LOCATION</p>
        <p>3/4,Laxmi Enclave 2,Gajera Circle,Katargam,Surat</p>
    </div>
</div>

    </div>
    <div className="contact-top-col-left">
        <ContactUsPageForm />
    </div>
</div>
        <div className="contact-us-map">
        <BobaMap />
        </div>
        
    </div>)
}