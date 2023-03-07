import React from "react";
import { Route, Routes } from "react-router-dom";
import ArchivedNote from "./ArchivedNoteContainer/ArchivedNote";
import "./styles/styles.css";
import UnArchivedNote from "./UnArchivedNoteContainer/UnArchivedNote";
import PropTypes from "prop-types";

function ItemListContainer({ notes, getData }) {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);

  return (
    <div className="item-list-container">
      <Routes>
        <Route
          path="/"
          element={<ArchivedNote notes={activeNotes} getData={getData} />}
        />
        <Route
          path="/Archived"
          element={<UnArchivedNote notes={archiveNotes} getData={getData} />}
        />
      </Routes>
    </div>
  );
}

ItemListContainer.propTypes = {
  notes: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
};

export default ItemListContainer;
