import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fetchLogin} from '../../functions/Login'
import {FormStyle, FormWrap} from './styled'
function Login (props) {
    const [data, setData] = useState(null);
    const [flash, setFlash] = useState(null)

    const handleSubmit = (e) => {
        fetchLogin(e, data, window, props, setFlash)   
    }

    return (
        <FormWrap>
        <h4>Login</h4>
        <FormStyle onSubmit={handleSubmit}>
            <input placeholder="email" onChange={(e) => { setData({...data, email: e.target.value}) }} />
            <input placeholder="password" onChange={(e) => { setData({...data, password: e.target.value}) }} />
            <button id="submit">submit</button>
            {flash && 
              <ul>{flash.map(el => (
                   <li>{el.message}</li>
                  ))}
              </ul>
            }
        </FormStyle>
        </FormWrap>
    );
};

Login.propTypes = {
    
};

export default Login;