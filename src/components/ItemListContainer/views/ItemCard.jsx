import React from "react";

export default function ItemCard({ getData, notes, title, date, body }) {
  const actionButton = () => {
    getData(notes);
  }
  return (
    <div className="item-card" onClick={actionButton}>
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
