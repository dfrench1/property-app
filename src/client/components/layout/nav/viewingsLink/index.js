import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const ViewingsLink = props => {
  return (
    <span>
      <Link to="/viewings">Viewings</Link> 
    </span>
  );
};

ViewingsLink.propTypes = {};

export default ViewingsLink;
