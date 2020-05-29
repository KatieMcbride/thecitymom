import React, { useState, useEffect } from 'react';
import './style.css';
import Photo from './../../image/vanessa-bucceri-gDiRwIYAMA8-unsplash.jpg'


function Carousel() {
    return (
        <div>
            <h1 className="introducing">Introducing our new</h1>
            <div className="img-txt">
                <img id="image" src={Photo} width="100%"></img>
                <p className="text"> top toy picks</p>
                <button className="buttonShop">SHOP</button>
            </div>
        </div>
   
    )
};

export default Carousel;
