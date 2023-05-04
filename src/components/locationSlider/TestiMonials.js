import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from './TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../../image/user-one.png';
import './TestiMonials.css'
import astronaut from "../../assets/Images/location3.png";
import celebrating from "../../assets/Images/location4.png";
import education from "../../assets/Images/location3.png";
import taken from "../../assets/Images/location4.png"
const images = [astronaut, celebrating, education, taken];
const address=["AUNDH,PUNE","PIMPLE SAUDAGAR,PUNE","KOTHRUD,PUNE","AUNDH,PUNE"]
const location=[`https://maps.app.goo.gl/HafU1LxyZH972pxR7`
,`https://maps.app.goo.gl/WgnwQ5pKYnwfCEet6`,`https://maps.app.goo.gl/G938Z5U9sDmEJtFn8`,`https://maps.app.goo.gl/HafU1LxyZH972pxR7`]



const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'AUNDH',
            description: `https://maps.app.goo.gl/HafU1LxyZH972pxR7`,
            address: 'PUNE',
            img: astronaut
        },
        {
            name: 'PIMPLE SAUDAGAR',
            description: `https://maps.app.goo.gl/WgnwQ5pKYnwfCEet6`,
            address: 'PUNE',
            img: celebrating
        },
        {
            name: 'KOTHRUD',
            description: `https://maps.app.goo.gl/G938Z5U9sDmEJtFn8`,
            address: 'PUNE',
            img: education
        },
        {
            name: 'AUNDH',
            description: `https://maps.app.goo.gl/HafU1LxyZH972pxR7`,
            address: 'PUNE',
            img: celebrating
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5" >
                
                <p className="outlet-div-text">AVAILABLE <span style={{ color: "#fe611d" }}>IN</span></p>
                
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                            //     testiMonials.length === 0 ?
                            //         <div class="item">
                            //             <div class="shadow-effect">
                            //                 <img class="img-circle" src={userPic} />

                            //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            //             </div>
                            //             <div class="testimonial-name">
                            //                 <h5>Rajon Rony</h5>
                            //   z              <small>ITALY</small>
                            //             </div>
                            //         </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;