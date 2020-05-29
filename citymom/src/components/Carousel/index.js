import React, { useState, useEffect } from 'react';
import './style.css';
import Photo from './../../image/sai-de-silva-4-gFGb12hFA-unsplash.jpg'


function Carousel() {
    return (
        <div>
            <h1>Introducing our new products</h1>
            <img src={Photo} width="100%"></img>
        </div>
   
    )
};

export default Carousel;
