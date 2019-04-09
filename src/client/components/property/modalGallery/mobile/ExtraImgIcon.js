import React from "react";
import PropTypes from "prop-types";
import { ExtraImgStyle } from "./styled";

const ExtraImgIcon = ({ method, count }) => {
  return (
    <ExtraImgStyle onClick={() => method()}>+{count}</ExtraImgStyle>
  );
};

ExtraImgIcon.propTypes = {
  method: PropTypes.func
}

export default ExtraImgIcon;
