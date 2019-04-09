import React, { useState, useEffect } from "react";
import { register } from "../../functions/Register";
import { FormStyle, FormWrap } from "./styled";
import Flash from "../generic/flashMessages";

function SignUp(props) {
  const [data, setData] = useState(null);
  const [flash, setFlash] = useState(null);

  const handleSubmit = e => {
    register(e, data, setFlash, window, props);
  };

  return (
    <FormWrap>
      <h4>Register</h4>
      <FormStyle onSubmit={handleSubmit}>
        <input
          placeholder="name"
          onChange={e => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <input
          type="email"
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
        <select
          onChange={e => {
            if (e.target.value !== "") {
              setData({ ...data, admin: e.target.value });
            }
          }}
        >
          {" "}
          <React.Fragment>
            <option value="">select</option>
            <option value={false}>user</option>
            <option value={true}>admin</option>
          </React.Fragment>
        </select>
        <button id="submit">submit</button>
        {flash && flash.map(el => <Flash message={el.message} />)}
      </FormStyle>
    </FormWrap>
  );
}

export default SignUp;
