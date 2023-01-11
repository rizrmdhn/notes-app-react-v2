import React from "react";
import "./styles/styles.css";

export default function MenuContainer() {
  return (
    <div className="menu-container">
      <div className="search-container">
        <input
          type="search"
          className="form-control"
          id="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
