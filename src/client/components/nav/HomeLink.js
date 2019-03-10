import React from "react";
import { Home } from "styled-icons/fa-solid/Home";
import {Link} from 'react-router-dom'

const HomeLink = () => (
  <Link to="/">
    <Home size="30" color="green" />
  </Link>
);

export default HomeLink
