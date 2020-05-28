import React, { useState, useEffect } from 'react';
import './style.css';

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
        <h1 className="main-logo">City Mom</h1>
      </div>
    )
};

export default NavBar;

 