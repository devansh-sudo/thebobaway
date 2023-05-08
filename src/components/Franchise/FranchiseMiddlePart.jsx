import { Image } from "react-bootstrap"
import "./FranchiseMiddlePart.css"

export const FranchiseMiddlePart=()=>{


    return (<div className="fr-middle-container">
        <div className="fr-md-cup-container"> <img src="Group8889.png" className="fr-md-cup" /></div>
        <div className="fr-md-heading-info">
<h1 className="fr-md-heading"> WORK <span style={{color:"#fe611d"}}>CULTURE</span></h1>
<br />
<p className="fr-md-info">Our Boba baristas are our biggest strength. No matter how
hectic their day has been, they will always welcome you with a big smile & will put their heart & soul to make you feel welcomed & comfortable thus gives you a warm & homely vibe.
</p>
        </div>
        <div className="fr-md-cup-last-container"><Image src="image60.png" className="fr-md-cup-last" fluid /> </div>
    </div>)
}