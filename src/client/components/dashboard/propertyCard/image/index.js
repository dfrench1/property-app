import React from "react";
import PropTypes from "prop-types";
import FavBtn from "../../favouritesBtn";
import { ImgStyle } from "./styled";
import FadeIn from "react-lazyload-fadein";
const CardImage = ({ data }) => {
  return (
        <React.Fragment>
          <ImgStyle
            key={data._id}
            src={`https://s3-eu-west-1.amazonaws.com/property-app-assets/${data.images[0]}`}
          />          
          <FavBtn data={data} />
        </React.Fragment>
  );
};

CardImage.propTypes = {};

export default CardImage;
