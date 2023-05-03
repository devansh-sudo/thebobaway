import React from 'react';
import {MdSend} from "react-icons/md"
import {BsFillPinMapFill} from "react-icons/bs"

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            
                <img class="img-circle" src={img} />
                {/* <p>{description}</p> */}
                <a href={description} style={{textDecoration:"none"}}>    
            <div className="testimonial-name">
            <BsFillPinMapFill  size="20" />
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
            </a>
        </div>
    );
};

export default TestiMonialsDetails;