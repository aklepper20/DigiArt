import React from "react";
import "../style/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="row footer__row">
                <a href="#" className="footer__anchor">
                    <figure className="footer__logo">
                        <img
                            src="./images/logo.png"
                            alt="logo"
                            className="footer__logo-img"
                        />
                    </figure>
                    <span className="footer__logo--popper">
                        Top <i className="fas fa-arrow-up"></i>
                    </span>
                </a>
                <div className="footer__social--list">
                    <a href="/cart" className="footer__social--link">
                        Cart
                    </a>
                    <a href="/marketplace" className="footer__social--link">
                        Marketplace
                    </a>
                    <a href="/profile" className="footer__social--link">
                        Profile
                    </a>
                </div>
                <div className="footer__copyright">
                    CopyRight &copy; 2022 DigiArt
                </div>
            </div>
        </footer>
    );
}

export default Footer;
