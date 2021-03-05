import React from 'react'
import { Link } from 'react-router-dom';
//images
import Round1 from '../styles/images/panel7.jpg';
import Round2 from '../styles/images/panel11.jpg';
import Round3 from '../styles/images/panel25.jpg';
import Round4 from '../styles/images/panel20.jpg';
import Round5 from '../styles/images/panel14.jpg';
import Square1 from '../styles/images/panel.jpg';
import Square2 from '../styles/images/panel4.jpg';
import Square3 from '../styles/images/panel15.jpg';

export default function catagories() {
    return (
        <div>
         <section className="catagories" id="catagories">
            <div className="catagory-round-container">
             <a href="#"><img src={Round1}className="cata-image"/></a>
             <a href="#"><img src={Round2}className="cata-image"/></a>
             <a href="#"><img src={Round3}className="cata-image"/></a>
             <a href="#"><img src={Round4}className="cata-image"/></a>
             <a href="#"><img src={Round5}className="cata-image"/></a>
            </div>
            <div className="catagory-square-container">
             <a href="#"><img src={Square1}className="cata-square"/></a>
             <Link to="/tshirt"><img src={Square2}className="cata-square"/></Link>
             <a href="#"><img src={Square3}className="cata-square"/></a>
            </div>
         </section>
        </div>
    )
}
