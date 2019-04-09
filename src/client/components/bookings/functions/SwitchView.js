import React from 'react'
import BookingList from "../bookingList";
import BookingMap from "../bookingMap";
import { Link } from "react-router-dom";

export function switchView(props, bookings, map, setMap, handleCancelBooking){
    let component;
    if (props.user && bookings.length > 0 && !map) {
      component = (
        <BookingList
          setMap={setMap}
          bookings={bookings}
          handleCancelBooking={handleCancelBooking}
        />
      );
    } else if (props.user && bookings.length > 0 && map) {
      component = <BookingMap switchFunc={setMap} bookings={bookings} />;
    } else if (props.user && !bookings.length) {
      component = <div>You have not made any bookings yet...</div>;
    } else {
      component = (
        <div>
          Please <Link to="/login">login</Link> to see Bookings
        </div>
      );
    }
    return component
}