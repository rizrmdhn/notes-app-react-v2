import React from "react";
import ItemBody from "./ItemBody";

export default function ItemCard({ title, body }) {
  return (
    <div className="item-card-container">
      <div className="item-card">
        <ItemBody title={title} body={body} />
      </div>
    </div>
  );
}
