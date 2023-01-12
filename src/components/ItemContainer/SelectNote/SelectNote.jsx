import React from "react";
import "./styles/styles.css";

export default function SelectNote() {
  return (
    <div className="select-note-container">
      <div className="select-note">
        <i className="bi bi-file-earmark-text"></i>
        <h1 className="select-note-title">Select a note to view.</h1>
        <p className="select-note-subtitle">
          Choose a note from the list on the left to view its contents, or
          create a new note to add to your collection.
        </p>
      </div>
    </div>
  );
}
