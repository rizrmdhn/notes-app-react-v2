import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";
import { useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function MenuContainer({ onSearch }) {
  const location = useLocation();

  const onSearchProject = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="menu-container">
      <div className="logo-container">
        <h1 className="logo">Notes App</h1>
      </div>
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
      <div className="search-container">
        <input
          onChange={onSearchProject}
          type="search"
          className="search-form form-control"
          id="search-input"
          placeholder="Search Notes ... "
        />
      </div>
      <div className="option-container">
        <ul className="nav flex-column">
          <li className="nav-item">
            {location.pathname === "/" ? (
              <Link className="nav-link" to="/">
                <button className="ActiveNotes-option link-button ActiveButton">
                  Active Notes
                </button>
              </Link>
            ) : (
              <Link className="nav-link" to="/">
                <button className="ActiveNotes-option link-button">
                  Active Notes
                </button>
              </Link>
            )}
          </li>
          <li className="nav-item">
            {location.pathname === "/Archived" ? (
              <Link className="nav-link" to="/Archived">
                <button className="ArchivedNotes-option link-button ActiveButton">
                  Archived Notes
                </button>
              </Link>
            ) : (
              <Link className="nav-link" to="/Archived">
                <button className="ArchivedNotes-option link-button">
                  Archived Notes
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

MenuContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default MenuContainer;
