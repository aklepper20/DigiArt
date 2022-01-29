import React, { useState } from "react";
// import PopUpCard from "./PopUpCard";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import PopUpCard from "./PopUpCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import Bid from "./Bid";
import { useStateValue } from "../StateProvider";

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
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 480,
  color: "white",
  border: "2px solid #6bbaec",
  p: 2,
  px: 4,
  pb: 3,
};

function Card({
  name,
  img,
  description,
  price,
  key,
  id,
  nftSymbol,
  openSeaLink,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [bidOpen, setBidOpen] = useState(false);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        img: img,
        price: price,
        qty: 1,
      },
    });
  };

  const bidInfo = () => {
    setBidOpen(true);
    dispatch({
      type: "BID",
      item: {
        price: price,
      },
    });
  };

  return (
    <div className="card" key={key}>
      <div className="topImg">
        <img src={img} alt="" />
      </div>
      <div className="description">
        <p className="card-name">{name}</p>
        <h6 className="price">{price}</h6>
        <p>{description}</p>
      </div>
      <div className="card-btns">
        <RequestQuoteIcon onClick={bidInfo} />
        {bidOpen && <Bid setBidOpen={setBidOpen} />}
        <button
          className="moredts"
          type="button"
          style={{
            color: "white",
          }}
          onClick={() => setOpen(true)}
        >
          More Details...
        </button>
        <ShoppingCartIcon onClick={addToBasket} />
      </div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <PopUpCard
              name={name}
              img={img}
              description={description}
              price={price}
              nftSymbol={nftSymbol}
              openSeaLink={openSeaLink}
            />
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}

export default Card;
