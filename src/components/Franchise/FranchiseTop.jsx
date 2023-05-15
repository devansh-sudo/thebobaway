import { Image } from "react-bootstrap"
import { FranchisePageForm } from "./FranchisePageForm"
import "./FranchiseTop.css"
export const FranchiseTop=()=>{




    return (<div className="fr-top-container">

        <div className="fr-top-left">
            <h1 className="fr-top-heading">BECOME A  <span style={{color:"#fe611d"}}>FRANCHISE OWNER</span></h1>
            <p className="fr-top-info">The Boba Way was started by College friends from diverse backgrounds, with a common love for Boba! Combining their diverse backgrounds and a love for Boba! Flavourful bubble tea, our Co-founders have handpicked the best ingredients for a Boba -tastic experience.</p>
        </div>
        <div className="fr-top-form">
<FranchisePageForm />
        </div>
        <div> <Image src="" className="fr-big-boba-img" fluid /></div>
    </div>)
}