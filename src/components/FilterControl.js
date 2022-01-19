import React from "react";
import "../style/FilterControl.css";

function FilterControl({ filterMarket, setFilterMarket }) {
    const handleStatus = (e) => {
        // console.log(e);
        setFilterMarket(e);
    };
    console.log(filterMarket);
    return (
        <div className="items-statuses">
            <span
                className={filterMarket === "all" ? "active" : ""}
                onClick={() => handleStatus("all")}
            >
                All
            </span>
            <span
                className={
                    filterMarket === "Mutant Ape Yacht Club" ? "active" : ""
                }
                onClick={() => handleStatus("Mutant Ape Yacht Club")}
            >
                Ape Yacht Club
            </span>
            <span
                className={filterMarket === "DeadFellaz" ? "active" : ""}
                onClick={() => handleStatus("DeadFellaz")}
            >
                DeadFellaz
            </span>
            <span
                className={filterMarket === "Pudgy Penguins" ? "active" : ""}
                onClick={() => handleStatus("Pudgy Penguins")}
            >
                Pudgy Penguins
            </span>
            <span
                className={filterMarket === "World of Women" ? "active" : ""}
                onClick={() => handleStatus("World of Women")}
            >
                World of Women
            </span>
            <span
                className={
                    filterMarket === "Bored Ape Kennel Club" ? "active" : ""
                }
                onClick={() => handleStatus("Bored Ape Kennel Club")}
            >
                Kennel Club
            </span>
        </div>
    );
}

export default FilterControl;
