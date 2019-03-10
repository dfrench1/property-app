import React from "react";
import PropTypes from "prop-types";

const Image = ({ item, method }) => {
  return (
    <img
      src={item.gallery_image.url}
      style={{ cursor: "pointer" }}
      width="100%"
      height="310px"
      onClick={() => method()}
    />
  );
};

Image.propTypes = {
  item: PropTypes.object,
  method: PropTypes.func,
}

export default Image;
