import React from "react";
import "./styles/styles.css";
import UnAvaliableNote from "./UnAvaliableNote/UnAvaliableActiveNote";
import ItemContainer from "./views/ItemContainer";

export default function ItemListContainer({ notes }) {
  return (
    <div className="item-list-container">
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
            />
          ))}
        </div>
      ) : (
        <UnAvaliableNote />
      )}
    </div>
  );
}
