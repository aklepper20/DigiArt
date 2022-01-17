import React, { useState } from "react";
import "../style/CartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useStateValue } from "../StateProvider";

function CartCard({ img, price, name, id }) {
    const [{ basket }, dispatch] = useStateValue();
    const [count, setCount] = useState(1);

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
                    <FormControl>
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

            <DeleteIcon
                onClick={removeFromBasket}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
}

export default CartCard;
