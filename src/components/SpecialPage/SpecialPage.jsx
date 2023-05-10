import { Image } from "react-bootstrap"


import "./SpecialPage.css"
export const SpecialPage=()=>{



    return (<div className="special-div-container">
<div className="special-heading"><p>SPECIAL <span style={{color:"#fe611d"}}>ONE</span></p> </div>
        <div className="special-div-img-container">
<div><Image src="spslone.png" alt="special-boba-image" fluid /></div>
<div> <Image src="spsltwo.png" alt="special-boba-image" fluid /></div>
<div> <Image src="spslthree.png" alt="special-boba-image" fluid /></div>
<div> <Image src="spslfour.png" alt="special-boba-image" fluid /></div>
</div>

    </div>)
}