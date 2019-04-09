import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { checkProperty } from "./functions/CheckProperty";
import { verifyToken } from "../../functions/VerifyToken";
import PropertyHome from "./home";

function Property(props) {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [flash, setFlash] = useState(null);
  useEffect(() => {
    checkProperty(localStorage, props, setData, setFlash);
    verifyToken(window, setUser);
  }, []);
  return flash ? (
    <React.Fragment>
      <div>{flash}</div>
      <Link to="/">{"Home"}</Link>
    </React.Fragment>
  ) : data ? (
    <PropertyHome data={data} />
  ) : null;
}

export default Property;
