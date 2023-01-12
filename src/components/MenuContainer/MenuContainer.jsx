import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

export default function MenuContainer({ onSearchType }) {
  const onSearchTypeProject = (event) => {
    onSearchType(event.target.value);
  };
  return (
    <div className="menu-container">
      <div className="add-note-container">
        <button
          type="button"
          className="add-note btn"
          data-bs-toggle="modal"
          data-bs-target="#addNoteModal"
        >
          <i className="bi bi-plus-lg"></i> Add Note
        </button>
      </div>
      <div className="option-container">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <button className="ActiveNotes-option link-button">
                Active Notes
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Archived">
              <button className="ArchivedNotes-option link-button">
                Archived Notes
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
