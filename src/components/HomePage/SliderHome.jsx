import React from 'react';
import {MdSend} from "react-icons/md"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./SliderHome.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/Images/location1.png';
import slide_image_2 from '../../assets/Images/location2.png';
import slide_image_3 from '../../assets/Images/location1.png';



export const SliderHome=()=> {

  var address=[`https://maps.app.goo.gl/HafU1LxyZH972pxR7`
  ,`https://maps.app.goo.gl/WgnwQ5pKYnwfCEet6`,`https://maps.app.goo.gl/G938Z5U9sDmEJtFn8`]

  return (
    <div className="container" style={{backgroundImage:`url("happy-background.png)`}}>
      <h1 className="heading">OUR OUTLET LOCATIONS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide >
         <div className='slide-img-div'> 
         <img src={slide_image_1} alt="slide_image" />
         <div className='multiple-shop-address'>
          <div className='multiple-shop-address-text'>AUNDH,PUNE</div>
          {/* <div className='send-location-icon'><a href={address[0]} style={{textDecoration:"none",color:"black"}}></a></div> */}
         </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide-img-div'>
          <img src={slide_image_2} alt="slide_image" />
          <div className='multiple-shop-address'>
          <div className='multiple-shop-address-text'><text style={{paddingBottom:"15px"}}> PIMPLE SAUDAGAR,PUNE</text></div>
          {/* <div className='send-location-icon'><a href={address[1]} style={{textDecoration:"none",color:"black"}}><MdSend size={60} className='icon-in' /></a></div> */}
         </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide-img-div'>
          <img src={slide_image_3} alt="slide_image" />
          <div className='multiple-shop-address'>
          <div className='multiple-shop-address-text'>KOTHRUD,PUNE</div>
          {/* <div className='send-location-icon'><a href={address[2]} style={{textDecoration:"none",color:"black"}}><MdSend size={60} className='icon-in' /></a></div> */}
         </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
        <div className='slide-img-div'> 
        <img src={slide_image_4} alt="slide_image" />
        <div className='multiple-shop-address'>
          <div className='multiple-shop-address-text'>AUNADH,PUNE</div>
          <div className='send-location-icon'><MdSend size={60} className='icon-in' /></div>
         </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide-img-div'>
          <img src={slide_image_5} alt="slide_image" />
          <div className='multiple-shop-address'>
          <div className='multiple-shop-address-text'>AUNADH,PUNE</div>
          <div className='send-location-icon'><MdSend size={60} className='icon-in' /></div>
         </div>
          
          
          </div>
        </SwiperSlide> */}
 <br />
 <br />
 <br />
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

