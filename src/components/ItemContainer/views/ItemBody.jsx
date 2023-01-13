import React from "react";
import { showFormattedDate } from "../../../utils";
import DropDownMenu from "../DropDown/DropDownMenu";

export default function ItemBody({
  id,
  archived,
  title,
  createdAt,
  body,
  onArchive,
  onActive,
  onDelete,
  onEdit,
  onSaveDatas,
}) {
  return (
    <div className="item-body-container">
      <div className="item-body">
        <div className="item-body-header">
          <div className="item-body-title">
            <h1>{title}</h1>
          </div>
          <DropDownMenu
            id={id}
            archived={archived}
            onArchive={onArchive}
            onActive={onActive}
            onDelete={onDelete}
          />
        </div>
        <div className="item-body-content">
          <div className="item-body-date fs-5">
            <i className="bi bi-calendar3 text-muted"></i>
            <p className="text-muted">Date</p>
            <h1 className="calendar-date fs-5">
              {showFormattedDate(createdAt)}
            </h1>
          </div>
          <div className="item-body-location fs-5">
            <i className="bi bi-folder"></i>
            <p className="text-muted">Location</p>
            <h1 className="folder-location fs-5">
              {archived ? "Archive" : "Active"}
            </h1>
          </div>
          <textarea
            className="text-body-area fs-5"
            id="body"
            value={body}
            onChange={onEdit}
          ></textarea>
        </div>
        <div className="item-body-footer">
          <button className="edit-btn" onClick={onSaveDatas}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
