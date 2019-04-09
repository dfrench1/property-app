import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../components/login'

const LoginPage = props => {
    return (
        !props.user && <Login {...props} />            
    );
};

LoginPage.propTypes = {
    
};

export default LoginPage;