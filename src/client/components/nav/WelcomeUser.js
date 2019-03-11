import React from "react";
import {Link} from 'react-router-dom'

const Welcome = ({user}) => (
  <React.Fragment>
    <span style={{ color: "green", marginRight: "1em" }}>
      Welcome {user.name}
    </span>
    <Link
      style={{ color: "black" }}
      onClick={() => {
        window.sessionStorage.removeItem("jwtToken");
        setUser(false);
      }}
      to="/"
    >
      Logout
    </Link>
  </React.Fragment>
);

export default Welcome;
