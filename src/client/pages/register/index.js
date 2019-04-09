import React from 'react';
import PropTypes from 'prop-types';
import Register from '../../components/register'

const RegisterPage = props => {
    return (
      !props.user && <Register {...props} />
    );
};

RegisterPage.propTypes = {
    
};

export default RegisterPage;