import React from "react";

export default function SearchBar({ value, onChange, onClick }) {
    return (
        <div className="top-bar">
            <input type="text" className="search" onChange={onChange} value={value}></input>
            <div className="search-icon" onClick={onClick}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
