import React, { useRef } from "react";
import "../style/EditInputs.css";

function EditInputs({ activeNft, input, setInput }) {
  return (
    <div className="editInputs">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={activeNft?.productPrice}
      />
    </div>
  );
}

export default EditInputs;
