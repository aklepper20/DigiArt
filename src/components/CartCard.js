import React, { useState, useEffect } from "react";
import "../style/CartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useStateValue } from "../StateProvider";

function CartCard({ img, price, name, id, qty }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="cart__product">
      <img src={img} />
      <div className="cart__coin">
        <p>{name}</p>
        <p>Price: {price}</p>
      </div>
      <div className="cart__dropdown">
        QTY:
        <Box
          sx={{
            minWidth: 50,
            borderRadius: "5px",
            outline: "none",
          }}
        >
          {/* <InputLabel
                            id="demo-simple-select-label"
                            style={{ color: "black" }}
                        >
                            Quantity
                        </InputLabel> */}
          <Select
            className="cart__dropDown"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={qty}
            label="Quantity"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_QTY",
                id: id,
                qty: e.target.value,
              })
            }
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </Box>
      </div>

      <DeleteIcon onClick={removeFromBasket} style={{ cursor: "pointer" }} />
    </div>
  );
}

export default CartCard;
