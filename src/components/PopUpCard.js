import React from "react";

function PopUpCard({ name, img, description }) {
    return (
        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>{name}</h2>
                <hr class="hr-1" />
                <a class="close" href="#">
                    &times;
                </a>
                <div class="content">
                    <div className="topImg">
                        {/* xoxo image api should be pulled here */}
                        <img src={img} alt="" />
                    </div>
                    <div className="description">
                        <p>{name}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpCard;
