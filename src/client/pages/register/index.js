import React from 'react';
import PropTypes from 'prop-types';
import RegisterWidget from '../../components/registerWidget'
import Layout from '../../components/layout/index'

const Register = props => {
    return (
        // <Layout component={
            !props.user && <RegisterWidget {...props} />
        // } user={props.user} />
    );
};

Register.propTypes = {
    
};

export default Register;