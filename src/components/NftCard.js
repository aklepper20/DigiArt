import React, { useState } from "react";
import "../style/NftCard.css";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#041010",
  color: "white",
  border: "2px solid #6bbaec",
  p: 2,
  px: 4,
  pb: 3,
};

function NftCard({ img, id }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    console.log("Delete the NFT using id in firebase");
    setOpen(false);
  };

  return (
    <div className="nftCard">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          type="button"
          style={{
            background: "transparent",
            color: "black",
            margin: 0,
            padding: 3,
          }}
          onClick={() => setOpen(true)}
        >
          X
        </button>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <h2 id="unstyled-modal-title">Are you sure you want to DELETE?</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
              }}
            >
              <button onClick={handleDelete}>DELETE</button>
              <button onClick={handleClose}>CANCEL</button>
            </div>
          </Box>
        </StyledModal>
      </div>
      <img src={img} alt="Nft card display" />
      <div className="nftCard__details">
        <p>ID: {id}</p>
      </div>
    </div>
  );
}

export default NftCard;
