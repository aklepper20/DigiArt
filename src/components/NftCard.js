import React from "react";
import "../style/NftCard.css";

function NftCard({ img, id }) {
  return (
    <div className="nftCard">
      <img src={img} alt="Nft card display" />
      <div className="nftCard__details">
        <p>ID: {id}</p>
      </div>
    </div>
  );
}

export default NftCard;
