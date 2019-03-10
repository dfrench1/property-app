import React, { useState } from "react";
import PropTypes from "prop-types";
import { SidebarWrap, FilterButton, GuestCount, PriceWrap, GuestWrap } from "./styled";
import { Range } from 'rc-slider';

function SideBar({ guestMethod, guests, priceMethod, price }) {
  const marks = {
    0: "£10",
    500: "£500"
  };
  return (
    <SidebarWrap>
      <PriceWrap>
        <h4>Price</h4>
        <Range 
          marks={marks}
          max={500}
          defaultValue={[10, 150]}
          onChange={val => {
            priceMethod({ type: "price", price: val });
          }}
        />
      </PriceWrap>
      <GuestWrap>
        <h4>Guests</h4>
        <FilterButton
          onClick={() => {
            guestMethod({ type: "guests", count: guests - 1 });
          }}
          disabled={guests == 1 ? true : false}
        >
          {'-'}
        </FilterButton>
        <GuestCount>{guests}</GuestCount>
        <FilterButton
          onClick={() => {
            guestMethod({ type: "guests", count: guests + 1 });
          }}
        >
          {'+'}
        </FilterButton>
      </GuestWrap>
    </SidebarWrap>
  );
}

SideBar.propTypes = {};

export default SideBar;
