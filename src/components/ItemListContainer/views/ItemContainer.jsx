import React from "react";
import { showFormattedDate } from "../../../utils";
import ItemCard from "./ItemCard";

export default function ItemContainer({
  id,
  notes,
  title,
  date,
  body,
  getData,
}) {
  return (
    <>
      <ItemCard
        id={id}
        notes={notes}
        title={title}
        date={showFormattedDate(date)}
        body={body}
        getData={getData}
      />
    </>
  );
}
