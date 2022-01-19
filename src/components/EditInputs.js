import React from "react";
import "../style/EditInputs.css";

function EditInputs({ activeNft }) {
    return (
        <div className="editInputs">
            <input placeholder={activeNft?.price} />
        </div>
    );
}

export default EditInputs;
