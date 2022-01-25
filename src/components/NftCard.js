import React, { useState } from "react";
import "../style/NftCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { doc, setDoc } from "firebase/firestore";
import db from "../utils/firebase";
import { useStateValue } from "../StateProvider";

function NftCard({ img, price, name, ID, profileInfo, user }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleDelete = (ID) => {
    let arr = [...profileInfo];
    const deletedArr = arr.filter((nft) => nft.id !== ID);
    setDoc(doc(db, "user", `${user}`), {
      productInfo: deletedArr,
    });
    setAnchorEl(null);
  };

  return (
    <>
      <div className="nft-id-delete">
        <span>{ID}</span>
        <button
          style={{ background: "none" }}
          aria-describedby={id}
          type="button"
          onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
        >
          <DeleteIcon className="nftCard__delete" />
        </button>
      </div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          style={{
            textSize: "12px",
            width: "220px",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            position: "absolute",
            top: "0",
            left: "0",
            border: "3px solid hsl(220, 98%, 61%)",
          }}
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
        >
          Are you sure you want to DELETE? ID: {ID}
          <div className="nftCard__btns">
            <button onClick={() => handleDelete(ID)}>DELETE</button>
            <button onClick={() => setAnchorEl(null)}>CANCEL</button>
          </div>
        </Box>
      </Popper>
      <div className="topImg">
        <img src={img} alt="" />
      </div>
      <div className="description">
        <p className="card-name">{name}</p>
        <h6 className="price profile-price">Price: {price}</h6>
      </div>
    </>
  );
}

export default NftCard;
