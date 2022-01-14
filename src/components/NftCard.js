import React, { useState } from "react";
import "../style/NftCard.css";
import ProfileModal from "./ProfileModal";
function NftCard({ img, id }) {
  const [openModal, setOpenModal] = useState(false);

  const hideModal = openModal ? "" : "hideModal";

  return (
    <div className="nftCard">
      <h3 onClick={() => setOpenModal(true)}>
        {openModal ? (
          <ProfileModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            hideModal={hideModal}
          />
        ) : (
          "X"
        )}
      </h3>
      <img src={img} alt="Nft card display" />
      <div className="nftCard__details">
        <p>ID: {id}</p>
      </div>
    </div>
  );
}

export default NftCard;
