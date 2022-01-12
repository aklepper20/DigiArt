import React from "react";
import "../style/ProfileModal.css";
function ProfileModal({ openModal, setOpenModal, hideModal }) {
  console.log(openModal);
  console.log(hideModal);
  return (
    <div className="profileModal">
      <p>Are you sure you want to delete #24?</p>
      <div>
        <p
          onClick={() =>
            console.log(
              "Send this to the delete function and set state to false"
            )
          }
        >
          Yes
        </p>
        <p onClick={() => setOpenModal(false)} className={`${hideModal}`}>
          Nope
        </p>
      </div>
    </div>
  );
  console.log(openModal);
}

export default ProfileModal;
