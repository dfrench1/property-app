import React from "react";
import { modifyDate } from "../../../../viewings/functions/ModifyDate";
const CardText = ({ item, remove, setRemove, date, handleCancelBooking }) => {
  //const date = modifyDate(item.event);
  return (
    <tr className={remove ? "remove" : undefined}>
    <td>{`${date.date} - ${date.time}`}</td>
    <td>
      <div>{item.event.title}</div>
      <div>{item.event.description}</div>
    </td>
    <td>{item.property.title}</td>
    <td>{item.property.price}</td>
    <td>
      <button
        style={{ background: "darkred", marginTop: "1em" }}
        onClick={() => {
          handleCancelBooking(item);
          setRemove(true);
        }}
      >
        Cancel
      </button>
    </td>
  </tr>
  );
};

export default CardText;
