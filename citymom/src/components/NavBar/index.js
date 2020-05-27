import React, { useState, useEffect } from 'react';
import './style.css';

function NavBar() {
    return (
      <div className="navBar">
        {/* <a className="navbar-item" href="/">
          <img src={Logo} width="32" alt="logo" />
        </a> */}
        <ul className="nav">
        <li><a href="#">Search</a></li>
        <li><a href="#">Legend</a></li>
        <li><a href="#">Info</a></li>
</ul>
        <h1 className="main-logo">City Mom</h1>
      </div>
    )
};

export default NavBar;

 