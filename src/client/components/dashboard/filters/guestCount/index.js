import React from "react";
import PropTypes from "prop-types";
import {GuestWrap, FilterButton, GuestCountStyle} from './styled'

const GuestCount = ({guestMethod, guests}) => {
  return (
    <GuestWrap>
      <h4>Guests</h4>
      <FilterButton
        onClick={() => {
          guestMethod({ type: "guests", count: guests - 1 });
        }}
        disabled={guests == 1 ? true : false}
      >
        {"-"}
      </FilterButton>
      <GuestCountStyle>{guests}</GuestCountStyle>
      <FilterButton
        onClick={() => {
          guestMethod({ type: "guests", count: guests + 1 });
        }}
      >
        {"+"}
      </FilterButton>
    </GuestWrap>
  );
};

GuestCount.propTypes = {};

export default GuestCount;
