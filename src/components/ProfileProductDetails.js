import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import EditInputs from "../components/EditInputs";
import ProfileNFTDisplay from "../components/ProfileNFTDisplay";

function ProfileProductDetails({ mrkt, selectedNft }) {
  const [editInputs, setEditInputs] = useState(false);
  const [activeNft, setActiveNft] = useState(mrkt[0]);

  useEffect(() => {
    setActiveNft(mrkt[selectedNft]);
  }, [mrkt, selectedNft]);
  //console.log(activeNft);
  return (
    <div className="profile__itemDesc">
      <img src={activeNft?.image_url} alt={activeNft?.name} />
      <div className="profile__productDetails">
        <h2 style={{ color: "white" }}>
          {activeNft?.name || activeNft?.collection.name}
        </h2>
        {editInputs ? (
          <EditInputs activeNft={activeNft} />
        ) : (
          <ProfileNFTDisplay activeNft={activeNft} />
        )}
        <div className="profile__btns">
          <button onClick={() => setEditInputs(false)}>Save</button>
          <button onClick={() => setEditInputs(true)}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileProductDetails;
