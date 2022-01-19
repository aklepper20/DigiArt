import React from "react";
import "../style/ProfileNFTDisplay.css";

function ProfileNFTDisplay({ activeNft }) {
    return (
        <div className="profileNFT">
            <div className="profileNFT__desc">
                <div className="profileNFT__category">
                    <p>Price</p> <span>{activeNft?.price}</span>
                </div>
                <div className="profileNFT__category">
                    <p>Category</p> <span>{activeNft?.category}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileNFTDisplay;
