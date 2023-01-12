import React from "react";

export default function ItemCard({ title, date, body }) {
  return (
    <div className="item-card">
      <div className="card-title">
        <h1 className="title fs-5">{title}</h1>
      </div>
      <div className="card-body">
        <h1 className="date fs-6">{date}</h1>
        <h1 className="body fs-6">{body}</h1>
      </div>
    </div>
  );
}
