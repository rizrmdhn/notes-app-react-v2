import React from "react";

export default function ItemBody({ title, body }) {
  return (
    <div className="item-body-container">
      <div className="item-body">
        <div className="item-body-title">
          <h1>{title}</h1>
        </div>
        <div className="item-body-content">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}
