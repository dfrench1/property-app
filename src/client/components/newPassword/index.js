import React, { useState, useEffect } from "react";
import { newPassword } from "../../functions/NewPassword";
import { FormStyle, FormWrap } from "../login/styled";
import { setRedirectFlash } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Flash from "../generic/flashMessages";
function NewPassword(props) {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    fetch(`/new-password/${props.match.params.token}`)
    .then(res => res.json())
    .then(json => {
      setToken(json)
    })
    .catch(err => console.log(err))
  }, [])

  const handleSubmit = e => {
    newPassword(e, data, props, token, setFlash);
  };

  return (
    <FormWrap>
      <h4>New Password</h4>
      <FormStyle onSubmit={handleSubmit}>
        <input
          placeholder="password"
          onChange={e => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button id="submit">submit</button>

        {flash && flash.map(el => <Flash message={el.message} key={el} />)}
      </FormStyle>
    </FormWrap>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setRedirectFlash: message => dispatch(setRedirectFlash(message))
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(NewPassword));
