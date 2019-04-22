import React, { useState, useEffect } from "react";
import { reset } from "../../functions/Reset";
import { FormStyle, FormWrap } from "../login/styled";
import { withRouter } from 'react-router-dom'
import Flash from "../generic/flashMessages";
function Reset(props) {
  const [data, setData] = useState(null);
  const [flash, setFlash] = useState(null);

  const handleSubmit = e => {
    reset(e, data, props, setFlash);
  };

  return (
    <FormWrap>
      <h4>Reset Password</h4>
      <FormStyle onSubmit={handleSubmit}>
        <input
          placeholder="email"
          onChange={e => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <button id="submit">submit</button>
        {flash && flash.map(el => <Flash message={el.message} key={el} />)}
      </FormStyle>
    </FormWrap>
  );
}

export default withRouter(Reset)
