import React from "react";
import SelectNote from "./SelectNote/SelectNote";
import "./styles/styles.css";
import ItemCard from "./views/ItemCard";

export default function ItemContainer({
  viewData,
  onArchive,
  onActive,
  onDelete,
}) {
  return (
    <div className="item-container">
      {viewData.length !== 0 ? (
        <ItemCard
          key={viewData.id}
          id={viewData.id}
          archived={viewData.archived}
          title={viewData.title}
          createdAt={viewData.createdAt}
          body={viewData.body}
          onArchive={onArchive}
          onActive={onActive}
          onDelete={onDelete}
        />
      ) : (
        <SelectNote />
      )}
    </div>
  );
}
