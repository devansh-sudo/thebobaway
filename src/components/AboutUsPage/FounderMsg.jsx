import { Col, Container, Image, Row } from "react-bootstrap"
import "./FounderMsg.css"
export const FounderMsg = () => {





    return (<div className="founder-div-container">
        <Container>
            <div className="founder-first-row">
                <div className="founder-first-row-first-col">
                    <span className="founder-first-col-img" >
                        <Image className="founder-avatar" src="founderimg.png" />
                    </span>
                    <span className="founder-first-col-name-img">
                        <span className="founderOne-name"><p>Isha Deshmukh <br />FOUNDER</p></span>
                        <span><Image className="founder-cup" src="IMG-0214.png" alt="cup-img" /></span>
                    </span>
                </div>
                <div className="founder-first-row-second-col">
                    <div> <p className="founder-heading">FOUNDER'S <span style={{ color: "tomato" }}>MESSAGE</span></p></div>
                    <div><p className="founder-msg">Our Founders themselves being millennials , saw the huge market gap of Authentic Boba Tea. A burning desire to fulfill this gap after a ton of research throughout & countless tastings we developed 25+ varieties of authentic & flavourful drinks that are served with immense warmth & love.</p></div>


                </div>

            </div>
            <div className="founder-second-row">
                <div className="abt-two-glass">
                    <img className="abt-two-glass-img" src="Group8886.png" alt="image" />
                </div>
                <div className="abt-founder-two-img-text">
                    
<div className="founder-two-name-cup-container">
                <span>
                <Image className="founder-cup-two" src="IMG-0214.png" alt="cup-img" />
            </span>
                        <span className="founder-two-text-span">
                            <p className="founder-two-text">Soham Geet <br /> FOUNDER</p>
                        </span> 
                        </div>
             <spam className="founderavatar-two">
            <img className="founderavatar-two-img" src="founderimg.png" alt="Soham-img" />
            </spam>
                    
                </div>
                <div className="chock-flow-img-div">
                    <Image className="chock-flow-img" src="aboutbottomimg.png" alt="chock-img" />
                </div>
            </div>
        </Container>
    </div>)
}