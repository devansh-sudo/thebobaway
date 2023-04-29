import React from 'react';
// import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
// import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
// import { ReactComponent as IconGithub } from './assets/icons/github.svg';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./App.css";
import { Navbar } from './components/Navbar/Navbar';
import { AllRoutes } from './components/AllRoutes/AllRoutes';
import { Footer } from './components/footer/Footer';
import Swipe from './components/HomePage/Outlets';
import Outlets from './components/HomePage/Outlets';


export default function App() {

  return (
    <div className='mainDiv'>

   <Navbar /> 
 <AllRoutes />   
<Footer />   
{/* <Outlets /> */}
      
    </div>

  );
}
