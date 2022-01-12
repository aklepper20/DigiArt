import React from "react";

function Card({ name, img, description }) {
    return (
        <div className="card">
            <div className="topImg">
                {/* xoxo image api should be pulled here */}
                <img src={img} alt="" />
            </div>
            <div className="description">
                <p>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
