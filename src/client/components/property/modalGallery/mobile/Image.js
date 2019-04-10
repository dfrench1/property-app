import React from "react";
import PropTypes from "prop-types";

const GalleryImg = ({ item, method }) => (
  <img src={item.gallery_image.url} onClick={() => method()} />
);

GalleryImg.propTypes = {
  item: PropTypes.object,
  method: PropTypes.func
};

export default GalleryImg;