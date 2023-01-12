import React from "react";
import "./styles/styles.css";

export default function DropDownMenu() {
  return (
    <div className="dropdown">
      <button
        className="dropdown-btn btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item archived-item" href="#">
            <i className="bi bi-archive"></i> Archived
          </a>
        </li>
        <li>
          <a className="dropdown-item delete-item" href="#">
            <i className="bi bi-trash"></i> Delete
          </a>
        </li>
      </ul>
    </div>
  );
}
