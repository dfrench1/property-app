import React, {useState, useEffect} from 'react';
import {register} from '../../functions/Register'
import {FormStyle, FormWrap} from './styled'
import PropTypes from 'prop-types';

function SignUp (props) {
    const [data, setData] = useState(null);
    const [flash, setFlash] = useState(null)

    const handleSubmit = (e) => {
            register(e, data, setFlash, window, props)
    }

    return (
        <FormWrap>
        <h4>Register</h4>
        <FormStyle onSubmit={handleSubmit}>
            <input placeholder="name" onChange={(e) => { setData({...data, name: e.target.value}) }} />
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

SignUp.propTypes = {
    
};

export default SignUp;