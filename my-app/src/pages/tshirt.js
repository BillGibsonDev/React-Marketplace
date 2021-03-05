import React from 'react'
import { Link, withRouter } from 'react-router-dom';

//images
import Img1 from '../styles/images/tshirtimage2.png';
import Img2 from '../styles/images/tshirtimage1.png';
import Img3 from '../styles/images/tshirtimage3.png';


export default function tshirt() {


    function shirtLoadHandler() {
        document.getElementById("shirt1").style.display = "block";
    }

    function displayShirthandler1() {
        document.getElementById("shirt1").style.display = "block";
        document.getElementById("shirt2").style.display = "none";
        document.getElementById("shirt3").style.display = "none";
    }
    function displayShirthandler2() {
        document.getElementById("shirt2").style.display = "block";
        document.getElementById("shirt1").style.display = "none";
        document.getElementById("shirt3").style.display = "none";
    }
    function displayShirthandler3() {
        document.getElementById("shirt3").style.display = "block";
        document.getElementById("shirt1").style.display = "none";
        document.getElementById("shirt2").style.display = "none";
    }

    return (
        <div>
            <section className="tshirt-page" onLoad={shirtLoadHandler}>
        <div className="image-container">
            <div className="mySlides">
                <img className="tshirt-image-slide" id="shirt1" src={Img1} />
            </div>
            <div className="mySlides">
                <img className="tshirt-image-slide" id="shirt2" src={Img2} />
            </div>
            <div className="mySlides">
                <img className="tshirt-image-slide" id="shirt3" src={Img3} />
            </div>
            <div className="row">
                <div className="column">
                    <img className="tshirt-image cursor" src={Img1} onClick={displayShirthandler1} />
                </div>
                <div className="column">
                    <img className="tshirt-image cursor" src={Img2} onClick={displayShirthandler2} />
                </div>
                <div className="column">
                    <img className="tshirt-image cursor" src={Img3} onClick={displayShirthandler3} />
                </div>
            </div>
        </div>
        <div className="tshirt-info">
            <h3 className="tshirt-title">Random Bear T-Shirt</h3>
            <h4>By Designed By Humans</h4>
            <div className="selector-container">
                <label for="selectorOne">Type:
                <select name="selectorOne" id="selectorOne">
                <option value="T-Shirt">T-Shirt</option>
                <option value="Hoodie">Hoodie</option>
            </select></label>
            </div>
            
            <div className="radio-container">
                <h4 className="radio-title">Sizes:</h4>
                <div className="radio-overlap">
                    <label for="radio">S
                    <input className="radio" name="radio" type="radio"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">M
                    <input className="radio" name="radio" type="radio"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">L
                    <input className="radio" name="radio" type="radio" value="L"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">XL
                    <input className="radio" name="radio" type="radio"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">2XL
                    <input className="radio" name="radio" type="radio" /></label>
                </div>
            </div>
            <div className="buttons">
                <Link id="cart-btn" to="/cart">Cart</Link>
                <Link id="checkout-btn" to="/checkout">Checkout</Link>
            </div>
         </div>
        </section>
        </div>
        
    )
}
