import React from "react";
import { Home } from "styled-icons/octicons/Home";
import {Link} from 'react-router-dom'

const HomeLink = () => (
  <Link to="/">
    <Home size="30" color="darkred" />
  </Link>
);

export default HomeLink
