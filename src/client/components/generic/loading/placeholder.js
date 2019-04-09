import React from "react";
import { PlaceholderStyle } from "./styled";
import { Image } from "styled-icons/boxicons-regular/Image";

const Placeholder = ({ width, height }) => (
  <PlaceholderStyle width={width} height={height}>
    <Image size="100" color="white" />
  </PlaceholderStyle>
);
export default Placeholder;
