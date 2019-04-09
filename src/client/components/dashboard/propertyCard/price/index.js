import React from 'react';
import PropTypes from 'prop-types';
import {PriceStyle} from './styled'
const Price = ({data}) => {
    return (
        <PriceStyle>
            <div>{'£'}{data.price}{' per night'}</div>
        </PriceStyle>
    );
};

Price.propTypes = {
    
};

export default Price;