import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { checkProperty } from "../../functions/checkProperty";
import {verifyToken} from '../../functions/VerifyToken'
import Layout from "../../components/layout/index";
import PropertyHome from '../../components/propertyHome/index'
import PropTypes from "prop-types";

function Property(props) {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [flash, setFlash] = useState(null);
  useEffect(() => {
      checkProperty(localStorage, props, setData, setFlash);
      //fetchProperty(props, setData)
      verifyToken(window, setUser)
  }, []);
  return (
    // <Layout
    //   component={
        flash ? (
          <React.Fragment>
            <div>{flash}</div>
            <Link to="/">{"Home"}</Link>
          </React.Fragment>
        ) : data ? (
          <PropertyHome data={data} />
        ) : null
    //   }
    //   user={user}
    // />
  );
}

Property.propTypes = {};

export default Property;
