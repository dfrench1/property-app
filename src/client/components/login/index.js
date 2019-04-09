import React, { useState, useEffect } from "react";
import { fetchLogin } from "../../functions/Login";
import { FormStyle, FormWrap } from "./styled";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions";
import { Link } from "react-router-dom";
import Flash from "../generic/flashMessages";
function Login(props) {
  const [data, setData] = useState(null);
  const [flash, setFlash] = useState(null);

  const handleSubmit = e => {
    fetchLogin(e, data, window, props, setFlash);
  };

  return (
    <FormWrap>
      <h4>Login</h4>
      <FormStyle onSubmit={handleSubmit}>
        <input
          placeholder="email"
          onChange={e => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          placeholder="password"
          onChange={e => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button id="submit">submit</button>
        <Link to="/register">Register</Link>
        {flash && flash.map(el => <Flash message={el.message} key={el} />)}
      </FormStyle>
    </FormWrap>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
