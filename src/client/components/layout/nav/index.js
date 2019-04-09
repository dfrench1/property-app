import React from "react";
import PropTypes from "prop-types";
import { NavStyle } from "./styled";
import HomeLink from "./homeLink";
import WelcomeUser from "./welcome";
import LoginLink from "./loginLink";
import BookingLink from "./bookingsLink";
import ViewingsLink from "./viewingsLink";
import AdminLink from "./adminLink";
import Logout from "./logoutLink";
const Nav = ({ user, setAuth }) => {
  return (
    <NavStyle>
      <HomeLink />
      {user 
      ? <WelcomeUser user={user} /> 
      : <LoginLink />}
      <ViewingsLink />
      <BookingLink />
      {user && user.admin && <AdminLink />}
      {user && <Logout setAuth={setAuth} />}
    </NavStyle>
  );
};

Nav.propTypes = {};

export default Nav;
