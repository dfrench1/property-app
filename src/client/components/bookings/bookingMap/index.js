import React from "react";
import Map from '../../generic/map'
const BookingMap = ({ switchFunc, bookings }) => {
  return (
    <div>
      <h3>Map</h3>
      <button
        onClick={() => {
          switchFunc(false);
        }}
        style={{margin:'0.5em 0 0.5em 0', padding:'0.5em'}}
      >
        Viewings
      </button>
      <Map booking={bookings}/>
    </div>
  );
};

export default BookingMap;
