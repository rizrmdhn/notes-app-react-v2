import React from "react";
import ItemBody from "./ItemBody";

export default function ItemCard({ title, createdAt, body }) {
  return (
    <div className="item-card-container">
      <div className="item-data-card">
        <ItemBody title={title} createdAt={createdAt} body={body} />
      </div>
    </div>
  );
}
