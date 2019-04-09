import React from "react";
import FullCard from "../fullCard";

export function searchFilter(el, guests, slider, cards, searchVal) {
  el.guests >= guests &&
  el.price >= slider.price[0] &&
  el.price <= slider.price[1]
    ? cards.push(<FullCard el={el} key={el._id} searchVal={searchVal} />)
    : null;
}
