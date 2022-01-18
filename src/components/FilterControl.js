import React from "react";
import "../style/FilterControl.css";

function FilterControl({ filterMarket, setFilterMarket }) {
    const handleStatus = (e) => {
        const status = e.target.innerText.toLowerCase();
        console.log(status);
        // setFilterMarket(status);
    };

    return (
        <div className="items-statuses">
            <span
                className={filterMarket === "all" ? "active" : ""}
                onClick={handleStatus}
            >
                All
            </span>
            <span
                className={filterMarket === "active" ? "active" : ""}
                onClick={handleStatus}
            >
                Ape Yacht Club
            </span>
            <span
                className={filterMarket === "DeadFellaz" ? "DeadFellaz" : ""}
                onClick={handleStatus}
            >
                Dead Fellaz
            </span>
            <span
                className={filterMarket === "completed" ? "active" : ""}
                onClick={handleStatus}
            >
                Pudgy Penguins
            </span>
            <span
                className={filterMarket === "completed" ? "active" : ""}
                onClick={handleStatus}
            >
                World Of Women
            </span>
            <span
                className={filterMarket === "completed" ? "active" : ""}
                onClick={handleStatus}
            >
                Kennel Club
            </span>
        </div>
    );
}

export default FilterControl;
