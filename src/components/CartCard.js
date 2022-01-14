import React, { useState } from "react";
import "../style/CartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function CartCard({ img, price }) {
  console.log(img, price);
  const [count, setCount] = useState(1);

  return (
    <div className="cart__product">
      <img src={img} />
      <div className="cart__coin">
        <p>Coin: {price}</p>
      </div>
      <div className="cart__dropdown">
        <Box
          sx={{
            minWidth: 120,
            backgroundColor: "white",
            borderRadius: "5px",
            outline: "none",
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "black" }}
            >
              Quantity
            </InputLabel>
            <Select
              style={{ color: "black" }}
              className="cart__dropDown"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={count}
              label="Count"
              onChange={(e) => setCount(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <DeleteIcon style={{ cursor: "pointer" }} />
    </div>
  );
}

export default CartCard;
