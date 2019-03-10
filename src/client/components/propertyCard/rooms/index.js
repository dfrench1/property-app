import React from 'react';
import PropTypes from 'prop-types';
import {RoomStyle} from './styled';

const Rooms = ({data}) => {
    return (
        <RoomStyle>
            {data.rooms}{' - '}
        </RoomStyle>
    );
};

Rooms.propTypes = {
    
};

export default Rooms;