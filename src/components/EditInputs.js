import React from "react";
import "../style/EditInputs.css";

function EditInputs() {
    return (
        <div className="editInputs">
            <input placeholder="Price" />
            <input placeholder="Description" />
            <input placeholder="Category" />
        </div>
    );
}

export default EditInputs;
