import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import {LogOut} from 'styled-icons/feather/LogOut'
import {setUser, setRedirectFlash} from '../../../../redux/actions'
import {connect} from 'react-redux';

const Logout = props => (
  <Link to="/">
    <LogOut
      style={{ position:'absolute', right:'0', top:'0.5em' }}
      onClick={() => {
        const cookies = new Cookies();
        cookies.remove("cookie-data");
        props.setUser(null)
        props.setAuth(null)
        props.setRedirectFlash('You are now logged out')
      }}
      size="30"
      color="darkred"
    />
  </Link>

);

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    setRedirectFlash: (message) => dispatch(setRedirectFlash(message))
    
  }
}

export default connect(
null,
mapDispatchToProps
)(Logout)

