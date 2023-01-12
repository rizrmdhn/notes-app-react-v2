import React from "react";
import SelectNote from "./SelectNote/SelectNote";
import "./styles/styles.css";
import ItemCard from "./views/ItemCard";

export default function ItemContainer({ viewData }) {
  return (
    <div className="item-container">
      {viewData.length !== 0 ? (
        <ItemCard
          key={viewData.id}
          title={viewData.title}
          createdAt={viewData.createdAt}
          body={viewData.body}
        />
      ) : (
        <SelectNote />
      )}
    </div>
  );
}
