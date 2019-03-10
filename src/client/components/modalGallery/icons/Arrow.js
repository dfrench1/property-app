import React, { Component } from "react";
import PropTypes from "prop-types";
import {IconWrap, ArrowIcon} from './styled'
import {KeyboardArrowLeft} from 'styled-icons/material/KeyboardArrowLeft'
import {KeyboardArrowRight} from 'styled-icons/material/KeyboardArrowRight'

const Arrow = ({ BtnMethod, img, imgArray, left }) => {
  return (
    <IconWrap left={left}
      onClick={() => BtnMethod(img, imgArray)}
    >
    {left ? 
      <KeyboardArrowLeft
        onClick={() => BtnMethod(img, imgArray)}
        color="white"
        size="70"
      /> :
       <KeyboardArrowRight
        onClick={() => BtnMethod(img, imgArray)}
        color="white"
        size="70"
      />}
    </IconWrap>
  );
};

Arrow.propTypes = {
  BtnMethod:PropTypes.func,
  img: PropTypes.string,
  imgArray: PropTypes.array,
  left: PropTypes.bool
}

export default Arrow;
