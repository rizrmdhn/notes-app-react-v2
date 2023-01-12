import React from "react";
import "./styles/styles.css";
export default function UnAvaliableNote() {
  return (
    <div className="unavaliable-note-container">
      <div className="unavaliable-note">
        <i className="bi bi-file-earmark-text"></i>
        <h1 className="unavaliable-note-title">No Notes.</h1>
      </div>
    </div>
  );
}
