import { Image } from "react-bootstrap"
import "./OutletPage.css"

import {BiLinkExternal} from "react-icons/bi"

export const OutletPage=()=>{




    return(<div className="outlet-page-container">
<div className="outlet-page-heading"> <p>OUTLETS</p></div>
<div className="outlet-top-row-container">
    <div className="outlet-left-col-container">
        <div className="outlet-address-container">
            <div className="outlet-address-text-container">
                <p className="outlet-address-heading">Kothrud</p>
                <p className="outlet-address-text">Besides Krishna Wines shop, Paud Rd, LIC Colony Rambaug Colony, Kothrud, Pune, Maharashtra 411038</p>
            </div>
            <div><a href="https://maps.app.goo.gl/G938Z5U9sDmEJtFn8"><BiLinkExternal size={"2.5vw"} /></a></div>
        </div>

        <div className="outlet-address-container">
            <div className="outlet-address-text-container">
                <p className="outlet-address-heading">Aundh </p>
                <p className="outlet-address-text">Shop no.4, Siddhart Apartment, Beside Chitale Bandhu, Gaikwad Nagar, Aundh</p>
            </div>
            <div><a href="https://maps.app.goo.gl/HafU1LxyZH972pxR7"><BiLinkExternal size={"2.5vw"} /></a></div>
        </div>

        <div className="outlet-address-container">
            <div className="outlet-address-text-container">
                <p className="outlet-address-heading">Pimple Saudagar</p>
                <p className="outlet-address-text">Shop no. 1, The Boba Way, Sai Dreams society, near, Govind Gdn Rd, Pimple Saudagar, Pune, Maharashtra 411027</p>
            </div>
            <div><a href="https://maps.app.goo.gl/WgnwQ5pKYnwfCEet6"><BiLinkExternal size={"2.5vw"} /></a></div>
        </div>
    </div>
    <div className="outlet-right-col-container">
<div className="outlet-left-col-main-img-container">
<Image src="outletmain.png" className="outlet-left-col-main-img" alt="outletimg" fluid />
</div>
<div className="outlet-left-col-three-img-container">
    <div className="outlet-left-col-three-img-one"><Image src="outlet1.png" alt="outletimg" fluid /></div>
    <div className="outlet-left-col-three-img-one"><Image src="outlet1.png" alt="outletimg" fluid /></div>
    <div className="outlet-left-col-three-img-one"><Image src="outlet1.png" alt="outletimg" fluid /></div>
</div>
    </div>
</div>

    </div>)
}