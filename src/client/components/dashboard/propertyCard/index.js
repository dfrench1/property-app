import React from "react";
import PropTypes from "prop-types";
import { CardWrap, NoResults } from "./styled";
import { searchFilter } from "./functions/Filter";
function Card({ data, searchVal, guests, slider }) {
  let cards = [];
  if (searchVal.value == "") {
    data.map(el => {
      searchFilter(el, guests, slider, cards, searchVal);
    });
  } else {
    data.map(el => {
      el.title.toLowerCase().includes(searchVal.value.toLowerCase()) &&
        searchFilter(el, guests, slider, cards, searchVal);
    });
  }
  return (
    <CardWrap>
      {cards.length ? (
        cards
      ) : (
        <NoResults>No results, try adjusting your search criteria</NoResults>
      )}
    </CardWrap>
  );
}

Card.propTypes = {
  data: PropTypes.array
};

export default Card;
