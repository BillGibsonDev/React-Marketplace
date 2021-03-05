import React from 'react';

// components
import Designs from './designs.js';
import Catagories from './catagories.js';

// IMAGES
import Triangle1 from '../styles/images/triangle.png';
import Triangle2 from '../styles/images/triangle.png';
import HomeImg from '../styles/images/taylor-xW4cBp9LoBM-unsplash.png';
function Home() {
  return (
    <div className="Home">
      <section className="home-page">
        <div className="special-container">
            <h2 className="specials">SUMMER SPECIALS<br/>50% OFF<br/>PRE-ORDERS</h2>
            <img src={Triangle1} className="triangle1" />
            <h2 className="code">Code: GTD50</h2>
            <a href="#catagories" className="shop-btn">Shop Now</a>
        </div>
        <div className="right-image">
            <img src={Triangle2} className="triangle2" />
            <img src={HomeImg} className="tshirt-image" />
        </div>
    </section>
    <Designs />
    <Catagories />
    </div>
  );
}

export default Home;