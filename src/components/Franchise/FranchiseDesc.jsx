import { Image } from "react-bootstrap"
import { IoStorefrontSharp } from "react-icons/io"
import "./FranchiseDesc.css"

const textOne = `Our secret recipe, which is loved and relished worldwide. A tall cup of love topped with Delicious and Mouth- watering Boba with ample garnishing of warm and pleasant vibes. The Boba Way thrives to be a loved Food and Beverage Franchise in India and beyond. We take pride in being the pioneer the Boba Way Catergory in India. We have and always will be striving for innovation expansion & growth while maintaining the consistency for the benefit of our Partners.`


const textTwo=`We intent to grow more than 100+ Franchise partners PAN India. Our Founders and we at The Boba Way, firmly stick to the roots of our mission to provide an enriching experience to our customers & expect the same desire and passion from our Franchise partners.
From the beginning we understand and work on a scalable, consistent model to be the key factor in spreading our delicious recipes & warm vibes. Our operating model is very easy to help entrepreneurs with little or no experience in food business to succeed with investing much lesser amounts and reaping more attractive returns.`

const textThree=`The Boba Way provides an all inclusive support system that is Store Design, Training, Operational & Marketing support, and of course our Secret recipes.
We look forward to a bright future with qualified individuals who share our mission, vision and passion.
Tap the button below to invest in a low budget franchise yet full support towards your entrepreneurial journey. Once your application is received our team will contact you shortly.
We look forward to hear from you!`

export const FranchiseDesc = () => {


    return (<div className="franchise-info-container">
        <div className="franchise-info-col-one">
            <div ><p className="fr-heading-three">PARTNER WITH <span style={{color:"#fe611d"}}>US</span></p></div>
            <div><p className="franchise-summery">
                {textOne}
                <br />
                <br />
                {textTwo}
                <br />
                <br />
                {textThree}
                </p></div>
            <div className="fr-four-icon-container">
                <div ><Image src="Group8925.png" className="franchise-icon" fluid /></div>
                <div><Image src="Group8924.png" className="franchise-icon" fluid /></div>
                <div><Image src="Group8926.png" className="franchise-icon" fluid /></div>
                <div><Image src="Group8927.png" className="franchise-icon" fluid /></div>
                <div><Image src="Group8928.png" className="franchise-icon" fluid /></div>
            </div>
        </div>
        <div className="franchise-info-col-two">
            <div className="fr-three-cup-img-container"><Image className="franchise-cup" src="Group8881.png" fluid /></div>
            <div className="fr-three-cup-img-container"><Image className="franchise-cup" src="Group8883.png" fluid /></div>
            <div className="fr-three-cup-img-container"><Image className="franchise-cup" src="Group8884.png" fluid /></div>
        </div>
    </div>)
}