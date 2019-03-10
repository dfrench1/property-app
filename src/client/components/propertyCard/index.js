import React from "react";
import PropTypes from "prop-types";
import FullCard from './fullCard'
import {CardWrap, NoResults} from './styled'

function Card({ data, searchVal, guests, slider }) {
  let cards = [];
  if (searchVal.value == ''){
    data.map(el => {
    el.guests >= guests && el.price >= slider.price[0] && el.price <= slider.price[1]
    ? cards.push(
      <FullCard el={el} searchVal={searchVal} />
    ) : null
    })
  } else {
  data.map(el => {
    el.title.toLowerCase().includes(searchVal.value.toLowerCase()) 
    && el.guests >= guests && el.price >= slider.price[0] && el.price <= slider.price[1]
    ? cards.push(
      <FullCard el={el} searchVal={searchVal} />
    ) : null
  })
}
  return <CardWrap>{cards.length ? cards : <NoResults>No results, try adjusting your search criteria</NoResults>}</CardWrap>
};

Card.propTypes = {
  data: PropTypes.array
};

export default Card;
