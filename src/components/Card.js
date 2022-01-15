import React, { useState } from "react";
// import PopUpCard from "./PopUpCard";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import PopUpCard from "./PopUpCard";

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

function Card({ name, img, description, price, key, id }) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <div className="card" key={key}>
            <div className="topImg">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <p>{name}</p>
                <h6 className="price">{price}</h6>
                <p>{description}</p>
            </div>
            <button
                type="button"
                style={{
                    backgroundColor: "lightskyblue",
                    padding: "8px 12px",
                    color: "white",
                    width: "100px",
                    display: "flex",
                    margin: "10px auto 20px",
                    textAlign: "center",
                }}
                onClick={() => setOpen(true)}
            >
                Checkout
            </button>
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
                            width: "480px",
                            display: "grid",
                            placeItems: "center",
                        }}
                    >
                        <PopUpCard
                            name={name}
                            img={img}
                            description={description}
                        />
                    </div>
                </Box>
            </StyledModal>
        </div>
    );
}

export default Card;
