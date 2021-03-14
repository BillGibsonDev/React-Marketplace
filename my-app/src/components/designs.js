import React, { useState , useEffect} from 'react'
import {Link} from 'react-router-dom';


// images
import D1 from '../styles/images/panel1.jpg';
import D2 from '../styles/images/panel6.jpg';
import D3 from '../styles/images/panel5.jpg';
import D4 from '../styles/images/panel8.jpg';
import D5 from '../styles/images/panel21.jpg';
import D6 from '../styles/images/panel23.jpg';
import D7 from '../styles/images/panel2.jpg';

export default function Designs() {
  

    return (
        <>
        
         <section className="designs">
          <h1>Discover appearel and accesories from independant artists, creators and more.</h1>
          <div className="designs-grid">
            <a href="#"><img src={D1} className="design-image" /></a>
            <a href="#" id="big"><img src={D2} className="design-image" /></a>
            <a href="#"><img src={D3} className="design-image" /></a>
            <a href="#"><img src={D4} className="design-image" /></a>
            <a href="#"><img src={D5} className="design-image" /></a>
            <a href="#"><img src={D6} className="design-image" /></a>
            <a href="#" id="wide"><img src={D7} className="design-image" /></a>
          </div>
         </section>
        </>
    )
}
