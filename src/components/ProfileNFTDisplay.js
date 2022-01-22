import React from "react";
import "../style/ProfileNFTDisplay.css";

function ProfileNFTDisplay({ activeNft }) {
  return (
    <div className="profileNFT">
      <div className="profileNFT__desc">
        <div className="profileNFT__category">
          <p>Price</p> <span>{activeNft?.productPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileNFTDisplay;
