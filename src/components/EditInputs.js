import React from "react";
import "../style/EditInputs.css";

function EditInputs() {
  return (
    <div className="editInputs">
      <input placeholder="Price" />
      <input style={{ height: "70px" }} placeholder="Description" />
    </div>
  );
}

export default EditInputs;
