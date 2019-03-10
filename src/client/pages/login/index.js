import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout/index'
import LoginWidget from '../../components/loginWidget'

const Login = props => {
    return (
        // <Layout component={
        !props.user && <LoginWidget {...props} />
            
        // } user={props.user} />
    );
};

Login.propTypes = {
    
};

export default Login;