import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import EditInputs from "../components/EditInputs";
import ProfileNFTDisplay from "../components/ProfileNFTDisplay";
import { doc, setDoc } from "firebase/firestore";
import db from "../utils/firebase";

function ProfileProductDetails({ profileInfo, selectedNft, user }) {
  const [editInputs, setEditInputs] = useState(false);
  const [activeNft, setActiveNft] = useState(profileInfo[0]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setActiveNft(profileInfo[selectedNft]);
  }, [profileInfo, selectedNft]);

  const updatePrice = (selectedNft) => {
    profileInfo.forEach((nft) => {
      if (nft.id === selectedNft) {
        setDoc(doc(db, "user", `${user}`), {
          productInfo: (nft.productPrice = input),
        });
      }
    });

    setEditInputs(false);
    setInput("");
  };
  return (
    <div className="profile__itemDesc">
      <img src={activeNft?.productImage} alt={activeNft?.productName} />
      <div className="profile__productDetails">
        <h2 style={{ color: "white" }}>{activeNft?.productName}</h2>
        {editInputs ? (
          <EditInputs activeNft={activeNft} input={input} setInput={setInput} />
        ) : (
          <ProfileNFTDisplay activeNft={activeNft} />
        )}
        <div className="profile__btns">
          <button onClick={() => updatePrice(selectedNft)}>Save</button>
          <button onClick={() => setEditInputs(true)}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileProductDetails;
