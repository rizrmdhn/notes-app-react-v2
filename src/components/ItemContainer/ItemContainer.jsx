import React from "react";
import SelectNote from "./SelectNote/SelectNote";
import "./styles/styles.css";
import ItemCard from "./views/ItemCard";
import PropTypes from "prop-types";

function ItemContainer({ viewData, onArchive, onActive, onDelete, editnote }) {
  return (
    <div className="item-container">
      {Object.keys(viewData).length !== 0 ? (
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
          editnote={editnote}
        />
      ) : (
        <SelectNote />
      )}
    </div>
  );
}

ItemContainer.propTypes = {
  viewData: PropTypes.object.isRequired,
};

export default ItemContainer;
