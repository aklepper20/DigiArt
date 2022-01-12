import React from "react";
import PopUpCard from "./PopUpCard";

function Card({ name, img, description, price }) {
    return (
        <div className="card">
            <div className="topImg">
                {/* xoxo image api should be pulled here */}
                <img src={img} alt="" />
            </div>
            <div className="description">
                <p>
                    {name} <span className="price">{price}</span>
                </p>
                <p>{description}</p>

                <a class="button" href="#popup1">
                    More Details
                </a>
                <PopUpCard name={name} img={img} description={description} />
            </div>
        </div>
    );
}

export default Card;
