import React from "react";
import "../style/Footer.css";

function Footer() {
    return (
        <footer>
            <div class="row footer__row">
                <a href="#" class="footer__anchor">
                    <figure class="footer__logo">
                        <img
                            src="./images/logo.png"
                            alt="logo"
                            class="footer__logo-img"
                        />
                    </figure>
                    <span class="footer__logo--popper">
                        Top <i class="fas fa-arrow-up"></i>
                    </span>
                </a>
                <div class="footer__social--list">
                    <a href="/cart" class="footer__social--link">
                        Cart
                    </a>
                    <a href="/marketplace" class="footer__social--link">
                        Marketplace
                    </a>
                    <a href="/profile" class="footer__social--link">
                        Profile
                    </a>
                </div>
                <div class="footer__copyright">
                    CopyRight &copy; 2022 DigiArt
                </div>
            </div>
        </footer>
    );
}

export default Footer;
