import React from "react";
import { showFormattedDate } from "../../../utils";
import ItemCard from "./ItemCard";

export default function ItemContainer({ notes, title, date, body }) {
  return (
    <>
      <ItemCard title={title} date={showFormattedDate(date)} body={body} />
    </>
  );
}
