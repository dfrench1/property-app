import React, { useState } from "react";
import PropTypes from "prop-types";
import { SidebarWrap } from "./styled";
import PriceRange from './priceRange'
import GuestCount from './guestCount'

function SideBar({ guestMethod, guests, priceMethod }) {
  return (
    <SidebarWrap>
      <PriceRange 
        priceMethod={priceMethod}
      />
      <GuestCount 
        guestMethod={guestMethod}
        guests={guests}
      />
    </SidebarWrap>
  );
}

SideBar.propTypes = {};

export default SideBar;
