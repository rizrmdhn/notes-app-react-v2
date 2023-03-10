import React from "react";
import UnAvaliableNote from "../UnAvaliableNote/UnAvaliableActiveNote";
import ItemContainer from "../views/ItemContainer";

export default function ArchivedNote({ notes, getData }) {
  return (
    <>
      <div className="item-list-header">
        <h1>Active Notes</h1>
      </div>
      {notes.length !== 0 ? (
        <div className="item-list">
          {notes.map((note) => (
            <ItemContainer
              key={note.id}
              id={note.id}
              notes={note}
              title={note.title}
              date={note.createdAt}
              body={note.body}
              getData={getData}
            />
          ))}
        </div>
      ) : (
        <UnAvaliableNote />
      )}
    </>
  );
}
