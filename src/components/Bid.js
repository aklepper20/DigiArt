import React, { useState } from "react";
import "../style/Bid.css";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
import { useStateValue } from "../StateProvider";

function Bid({ setBidOpen }) {
  const [response, setResponse] = useState("");
  const [bidInput, setBidInput] = useState("");
  const [textColor, setTextColor] = useState("");
  const [{ bid }] = useStateValue();

  const handleDecision = () => {
    let bidRemainer = bid.price - bidInput;
    bidRemainer = bidRemainer.toFixed(2);

    if (bidInput >= bid.price) {
      setResponse("BID ACCEPTED");
      setTextColor("#E4D00A");
    } else if (0 <= bidRemainer && bidRemainer <= 0.05) {
      setResponse("BID ACCEPTED");
      setTextColor("#013214");
    } else if (0.06 <= bidRemainer && bidRemainer <= 0.11) {
      setResponse("ACCEPTED, result may change");
      setTextColor("#F0E68C");
    } else if (bidRemainer >= 0.12) {
      setResponse("BID REJECTED");
      setTextColor("#ff0000");
    } else {
      setResponse("Invalid Entry");
    }
  };

  return (
    <div className="bid">
      <div className="bid__header">
        <CloseIcon className="bid__close" onClick={() => setBidOpen(false)} />
        <h4>
          <strong>
            <em>QUICK BID</em>
          </strong>
        </h4>
      </div>
      <div className="bid__input">
        <p>Enter bid: </p>
        <div className="bid__option">
          <input
            placeholder="Eth #"
            value={bidInput}
            onChange={(e) => setBidInput(e.target.value)}
          />
          <PublishIcon className="bid__submit" onClick={handleDecision} />
        </div>
      </div>
      <h4
        style={{
          color: textColor,
          textDecoration: "uppercase",
          textAlign: "center",
        }}
      >
        {response}
      </h4>
    </div>
  );
}

export default Bid;
