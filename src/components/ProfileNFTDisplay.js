import React from "react";
import "../style/ProfileNFTDisplay.css";

function ProfileNFTDisplay() {
  return (
    <div className="profileNFT">
      <div className="profileNFT__desc">
        <div className="profileNFT__category">
          <p>Price</p> <span>0.4eth</span>
        </div>
        <div className="profileNFT__category">
          <p>description</p> <span>desc</span>
        </div>
        <div className="profileNFT__category">
          <p>Category</p> <span>Cool Cats</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileNFTDisplay;
