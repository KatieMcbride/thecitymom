import React, { useState, useEffect } from 'react';
import './style.css';
import logo from './../../image/City Mom.png';

function NavBar() {
    return (
      <div className="navBar">
        {/* <a className="navbar-item" href="/">
          <img src={Logo} width="32" alt="logo" />
        </a> */}
        <ul className="nav">
        <li><a href="#">Shop</a></li>
        <li><a href="#">Pregnancy</a></li>
        <li><a href="#">Parenting</a></li>
        <li><a href="#">People</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Book Club</a></li>
</ul>
        {/* <h1 >City Mom</h1> */}
        <img src={logo} height="200px" width="200px" className="main-logo"></img>
      </div>
    )
};

export default NavBar;

 