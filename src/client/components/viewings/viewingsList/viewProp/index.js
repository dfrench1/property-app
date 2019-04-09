import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ViewProp = ({item}) => {
  return (
    <Link
      to={{
        pathname: `/property/${item._id}`,
        state: { data: item.property }
      }}
    >
      <button>Property</button>
    </Link>
  );
};

ViewProp.propTypes = {
  item: PropTypes.object
};

export default ViewProp;
