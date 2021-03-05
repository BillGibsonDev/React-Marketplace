import React from 'react'
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faInstagram , faFacebook , faYoutube , faPinterest} from "@fortawesome/free-brands-svg-icons";



export default function footer() {
    return (
        <div>
            <section className="footer">
        <div className="list-container">
            <ul className="foot-list">
                <h4>Shop</h4>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Catagories</a></li>
                <li><a href="#">Discounts</a></li>
            </ul>
            <ul className="foot-list">
                <h4>Help</h4>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Size Chart</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul className="foot-list">
                <h4>Community</h4>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Forums</a></li>
                <li><a href="#">Art</a></li>

            </ul>
            <ul className="foot-list">
                <h4>About Us</h4>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Charity</a></li>

            </ul>
        </div>
        <div class="socials">

            <a href="instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
            <a href="facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
            <a href="pintrest.com" target="_blank"><FontAwesomeIcon icon={faPinterest} size="3x"/></a>
            <a href="twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="3x"/></a>
            <a href="youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} size="3x"/></a>

        </div>
        <div className="form-wrapper">
            <form action="" class="email-form">
                <label className="email-label" for="email">Join our Email List!
                <input type="email" name="email" /></label>
                <button className="email-button">Join</button>
            </form>
        </div>
    </section>
        </div>
    )
}
