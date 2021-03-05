import React from 'react';
import { Link } from 'react-router-dom';
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// images
import GTDW from '../styles/images/GTDwhite.png';


function Nav() {
  return (
    <div className="Nav">
      <header className="main-head">
        <div className="nav-bar">
            <Link to="/"><img src={GTDW} className="logo" /></Link>
            <form className="search-bar" >
                <input type="text" name="search" id="search" />
                <button className="search-button">Search</button>
            </form>
            <a href="#"><FontAwesomeIcon icon={faUser} id="user" size="3x"/></a>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} id="cart" size="3x"/></Link>
        </div>
        <nav>
            <ul>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Discover</a></li>
            </ul>
        </nav>
    </header>
    </div>
  );
}

export default Nav;