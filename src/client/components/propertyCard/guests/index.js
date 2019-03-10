import React from 'react';
import PropTypes from 'prop-types';
import {GuestStyle} from './styled'
const Guests = ({data}) => {
    return (
        <GuestStyle>
            {data.guests} guests
        </GuestStyle>
    );
};

Guests.propTypes = {
    
};

export default Guests;