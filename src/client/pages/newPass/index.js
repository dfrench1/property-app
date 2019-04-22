import React from 'react';
import PropTypes from 'prop-types';
import NewPassword from '../../components/newPassword'

const PasswordPage = props => {
    return (
        <NewPassword {...props} />            
    );
};

PasswordPage.propTypes = {
    
};

export default PasswordPage;