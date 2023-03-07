import React from "react";
import "./styles/styles.css";
import PropTypes from "prop-types";

function DropDownMenu({ id, archived, onActive, onArchive, onDelete }) {
  const activeButton = () => {
    onActive(id);
  };
  const archiveButton = () => {
    onArchive(id);
  };

  const deleteButton = () => {
    onDelete(id);
  };

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
        {archived ? (
          <li>
            <a className="dropdown-item archived-item" onClick={activeButton}>
              <i className="bi bi-archive"></i> UnArchived
            </a>
          </li>
        ) : (
          <li>
            <a className="dropdown-item archived-item" onClick={archiveButton}>
              <i className="bi bi-archive"></i> Archived
            </a>
          </li>
        )}
        <li>
          <a className="dropdown-item delete-item" onClick={deleteButton}>
            <i className="bi bi-trash"></i> Delete
          </a>
        </li>
      </ul>
    </div>
  );
}

DropDownMenu.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DropDownMenu;
