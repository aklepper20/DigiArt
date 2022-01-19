import React, { useState } from "react";
import "../style/NftCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

function NftCard({ img, ID }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleDelete = () => {
    console.log("Delete item in database");
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <div style={{ height: "35px", display: "flex", justifyContent: "end" }}>
        <button
          style={{ background: "none" }}
          aria-describedby={id}
          type="button"
          onClick={handleClick}
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
          }}
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
        >
          Are you sure you want to DELETE? ID: {ID}
          <div className="nftCard__btns">
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={() => setAnchorEl(null)}>CANCEL</button>
          </div>
        </Box>
      </Popper>

      <img src={img} alt="Nft card display" />
      <div className="nftCard__details">
        <p>ID: {ID}</p>
      </div>
    </>
  );
}

export default NftCard;
