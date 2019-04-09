import React, { useState, useEffect } from "react";
import { cancelBooking } from "./functions/CancelBooking";
import { fetchBookings } from "./functions/FetchBookings";
import { switchView } from "./functions/SwitchView";
function Bookings(props) {
  const [bookings, setBookings] = useState([]);
  const [map, setMap] = useState(false);
  useEffect(() => {
    fetchBookings(props, setBookings);
  }, [props.user, map]);

  const handleCancelBooking = item => {
    cancelBooking(item, props, setBookings);
  };

  const changeView = () => {
    return switchView(props, bookings, map, setMap, handleCancelBooking)
  };

  return (
    <section style={{ textAlign: "center" }}>
      {changeView()}
    </section>
  );
}

export default Bookings;
