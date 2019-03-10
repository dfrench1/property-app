import React, { Component } from 'react';
import PropTypes from "prop-types";
import {DesktopWrap, ImgStyle, SmallWrap} from './styled'

const DesktopImg = ({ gallery, onOpenModalMulti }) => {
  const galleryLength = gallery[0].items.length
  return (
    <DesktopWrap length={galleryLength}>
      {gallery[0].items.map((item, index) => (
        index == 1 ?
        <SmallWrap>
          <ImgStyle
            index={index}
            src={item.gallery_image.url}
            onClick={() => onOpenModalMulti(item.gallery_image.url, gallery[0].items)}
            key={item.gallery_image.url}
          />
        </SmallWrap> :
        <ImgStyle
          index={index}
          src={item.gallery_image.url}
          onClick={() => onOpenModalMulti(item.gallery_image.url, gallery[0].items)}
          key={item.gallery_image.url}
        />
      ))}
    </DesktopWrap>
  );
};

DesktopImg.propTypes = {
  gallery: PropTypes.array,
  onOpenModalMulti: PropTypes.func
}

export default DesktopImg;
