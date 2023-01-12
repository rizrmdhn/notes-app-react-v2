import React from "react";
import { showFormattedDate } from "../../../utils";
import DropDownMenu from "../DropDown/DropDownMenu";

export default function ItemBody({ title, createdAt, body }) {
  return (
    <div className="item-body-container">
      <div className="item-body">
        <div className="item-body-header">
          <div className="item-body-title">
            <h1>{title}</h1>
          </div>
          <DropDownMenu />
        </div>
        <div className="item-body-date fs-5">
          <i className="bi bi-calendar3 text-muted"></i>
          <p className="text-muted">Date</p>
          <h1 className="calendar-date fs-5">{showFormattedDate(createdAt)}</h1>
        </div>
        <div className="item-body-content">
          <h1 className="fs-5">{body}</h1>
        </div>
      </div>
    </div>
  );
}
