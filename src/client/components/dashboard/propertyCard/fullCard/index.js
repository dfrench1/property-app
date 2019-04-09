import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import Title from "../title";
import Rooms from "../rooms";
import Guests from "../guests";
import Price from "../price";
import FavBtn from "../../favouritesBtn";
import { Link } from "react-router-dom";
import { CardWrap, DefaultImage } from "./styled";

import Loading from "../../../generic/loading/placeholder";

const CardImage = Loadable({
  loader: () => import("../image"),
  loading: () => <Loading />
});

function Card({ el, searchVal }) {
  return (
    <Link to={{ pathname: `/property/${el._id}`, state: { data: el } }}>
      <CardWrap>
        {el.images.length ? (
          <CardImage data={el} />
        ) : (
          <React.Fragment>
            <DefaultImage
              size="200"
              color="white"
            />
            <FavBtn data={el} />
          </React.Fragment>
        )}
        <div style={{width:'340px'}}>
        <Title
          data={el}
          highlight={
            el.title.toLowerCase().includes(searchVal.value.toLowerCase()) &&
            searchVal.value !== ""
              ? true
              : false
          }
        />
        <Rooms data={el} />
        <Guests data={el} />
        <Price data={el} />
        </div>
      </CardWrap>
    </Link>
  );
}

Card.propTypes = {
  el: PropTypes.object
};

export default Card;
