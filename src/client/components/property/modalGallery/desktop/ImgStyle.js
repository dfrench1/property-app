import React from "react";
import { ImgStyle } from "./styled";

const ImageStyle = ({ index, item, onOpenModalMulti, gallery }) => (
  <ImgStyle
    index={index}
    src={item.gallery_image.url}
    onClick={() => onOpenModalMulti(item.gallery_image.url, gallery[0].items)}
    key={item.gallery_image.url}
  />
);

export default ImageStyle;
