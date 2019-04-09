import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const LoginLink = props => {
  return (
    <span>
      <Link to="/login">Login</Link> 
    </span>
  );
};

LoginLink.propTypes = {};

export default LoginLink;
