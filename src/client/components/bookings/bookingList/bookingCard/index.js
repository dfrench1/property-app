import React, { useState } from "react";
import { modifyDate } from "../../../viewings/functions/ModifyDate";
import CardContent from './cardContent'
function BookingCard({ item, handleCancelBooking }) {
  const date = modifyDate(item.event);
  const [remove, setRemove] = useState(false);
  return (
    <CardContent 
      remove={remove}
      date={date}
      item={item}
      handleCancelBooking={handleCancelBooking}
      setRemove={setRemove}
    />
  );
}

export default BookingCard;
