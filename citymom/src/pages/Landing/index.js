import React, { useEffect } from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
// import AOS from 'aos';


function Landing() {
    // useEffect(() => {
    //   AOS.init();
    // });
    return (
      <div>
        <NavBar />
        <div>
            Hello World!
        </div>
      </div>
    );
  }
  
  export default Landing;