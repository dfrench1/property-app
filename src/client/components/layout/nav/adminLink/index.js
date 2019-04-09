import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const AdminLink = props => {
  return (
    <span>
      <Link to="/admin">Admin</Link> 
    </span>
  );
};

AdminLink.propTypes = {};

export default AdminLink;