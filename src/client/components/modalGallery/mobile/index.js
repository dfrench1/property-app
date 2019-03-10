import React, { Component } from "react";
import { MobileWrap } from "./styled";
import Image from "./Image";
import PropTypes from "prop-types";
import ExtraImgIcon from './ExtraImgIcon';

const MobileImg = ({ onOpenModalMulti, gallery }) => {
  const galleryLength = gallery[0].items.length;
  const ExtraImgCount = galleryLength - 1;
  const sliceGallery = gallery[0].items.slice(0, 1);
  const sliceArray = [];
  sliceGallery.map((el, index) => sliceArray.push({ id: index, ...el }));
  return (
    <MobileWrap>
      {sliceArray.map(item => {
          return (
            <section
              style={{ position: item.id === sliceArray.length - 1 && ExtraImgCount > 0 
              ? "relative" 
              : 'none', paddingBottom: "1em" }}
              key={item.id}
            >
              {item.id === sliceArray.length - 1 && ExtraImgCount > 0 &&
              <ExtraImgIcon 
                method={()=>onOpenModalMulti(item.gallery_image.url, gallery[0].items)}
                count={ExtraImgCount}
              />}
              <Image
                item={item}
                method={()=>onOpenModalMulti(item.gallery_image.url, gallery[0].items)}
              />
            </section>
          );
      })}
    </MobileWrap>
  );
};

MobileImg.propTypes = {
  gallery: PropTypes.array,
  onOpenModalMulti: PropTypes.func,
}

export default MobileImg;
