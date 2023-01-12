import React from "react";
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
      <div className="option-container" onChange={onSearchTypeProject}>
        <div className="ActiveNotes-option form-check">
          <input
            className="form-check-input"
            type="radio"
            name="NotesOptions"
            id="ActiveNotes"
            value="ActiveNotes"
            defaultChecked
          />
          <label className="ActiveNotes-form-label form-check-label" htmlFor="ActiveNotes">
            Active Notes
          </label>
        </div>
        <div className="ArchivedNotes-option form-check">
          <input
            className="form-check-input"
            type="radio"
            name="NotesOptions"
            id="ArchivedNotes"
            value="ArchivedNotes"
          />
          <label className="ArchivedNotes-form-label form-check-label" htmlFor="ArchivedNotes">
            Archived Notes
          </label>
        </div>
      </div>
    </div>
  );
}
