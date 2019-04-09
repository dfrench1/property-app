import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const BookingsLink = props => {
  return (
    <span>
      <Link to="/bookings">Bookings</Link> 
    </span>
  );
};

BookingsLink.propTypes = {};

export default BookingsLink;
