import React from "react";

function PopUpCard({ name, img, description }) {
    return (
        <div id="popup1" className="overlay">
            <div className="popup">
                <h2>{name}</h2>
                <hr className="hr-1" />
                <a className="close" href="#">
                    &times;
                </a>
                <div className="content">
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
