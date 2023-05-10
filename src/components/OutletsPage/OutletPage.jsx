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
                <p className="outlet-address-heading">KOTHRUD</p>
                <p className="outlet-address-text">Shop No.1,Abcd,Kothrud</p>
            </div>
            <div><BiLinkExternal size={"2.5vw"} /></div>
        </div>

        <div className="outlet-address-container">
            <div className="outlet-address-text-container">
                <p className="outlet-address-heading">KOTHRUD</p>
                <p className="outlet-address-text">Shop No.1,Abcd,Kothrud</p>
            </div>
            <div><BiLinkExternal size={"2.5vw"} /></div>
        </div>

        <div className="outlet-address-container">
            <div className="outlet-address-text-container">
                <p className="outlet-address-heading">KOTHRUD</p>
                <p className="outlet-address-text">Shop No.1,Abcd,Kothrud</p>
            </div>
            <div><BiLinkExternal size={"2.5vw"} /></div>
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