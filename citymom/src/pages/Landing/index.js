import React, { useEffect } from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
import Carousel from '../../components/Carousel';
// import AOS from 'aos';


function Landing() {
    // useEffect(() => {
    //   AOS.init();
    // });
    return (
      <div>
        <NavBar />
        <Carousel />
        <div>
            Hello World!
        </div>
      </div>
    );
  }
  
  export default Landing;