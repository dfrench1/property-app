import React from 'react';
import PropTypes from 'prop-types';
import {PriceWrap, RangeStyle} from './styled'

const marks = {
    0: "£10",
    500: "£500"
  };

const PriceRange = ({priceMethod}) => {
    return (
    <PriceWrap>
        <h4>Price</h4>
        <RangeStyle 
          marks={marks}
          max={500}
          defaultValue={[10, 150]}
          trackStyle={[{background: 'darkred'}]}
          onChange={val => {
            priceMethod({ type: "price", price: val });
          }}
        />
      </PriceWrap>
    );
};

PriceRange.propTypes = {
    
};

export default PriceRange;