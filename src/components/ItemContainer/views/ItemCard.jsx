import React from "react";
import ItemBody from "./ItemBody";

export default function ItemCard({
  id,
  archived,
  title,
  createdAt,
  body,
  onArchive,
  onActive,
  onDelete,
}) {
  return (
    <div className="item-card-container">
      <div className="item-data-card">
        <ItemBody
          id={id}
          archived={archived}
          title={title}
          createdAt={createdAt}
          body={body}
          onArchive={onArchive}
          onActive={onActive}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
