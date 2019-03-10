import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const LoginLink = props => {
  return (
    <span style={{color:'grey'}}>
      <Link to="/login">Login</Link> 
        <span>or</span>
      <Link to="/register">Register</Link>
    </span>
  );
};

LoginLink.propTypes = {};

export default LoginLink;
