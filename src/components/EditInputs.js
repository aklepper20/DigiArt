import React from "react";
import "../style/EditInputs.css";

function EditInputs({ activeNft }) {
  return (
    <div className="editInputs">
      <input placeholder={activeNft?.price} />
      {/* <input
        style={{ height: "70px" }}
        placeholder={activeNft?.collection.description}
      /> */}
    </div>
  );
}

export default EditInputs;
