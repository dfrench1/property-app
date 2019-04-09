import React, {useState} from "react";
import { PropList } from "../../admin/styled";
import { TableStyle } from "../../generic/table/styled";
import Card from "./bookingCard";
function BookingList ({ setMap, bookings, handleCancelBooking }) {
  return (
  <React.Fragment>
    <h3>Scheduled Viewings:</h3>
    <button
      onClick={() => {
        setMap(true);
      }}
      style={{ margin: "0.5em 0 0.5em 0", padding:'0.5em' }}
    >
      Map
    </button>
    <div style={{overflowX:'auto'}}>
    <TableStyle>
        <tbody>
        <tr>
          <th>Date</th>
          <th>Details</th>
          <th>Property</th>
          <th>Price</th>
          <th>Cancel</th>
        </tr>
        {bookings.map(item => {
          return (
            <Card 
              item={item} 
              handleCancelBooking={handleCancelBooking} 
              key={item._id}
            />
          )
        })}</tbody>
       
    </TableStyle>
    </div>
  </React.Fragment>
  )
}

export default BookingList;
