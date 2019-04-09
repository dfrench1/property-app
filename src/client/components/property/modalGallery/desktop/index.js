import React, { Component } from 'react';
import PropTypes from "prop-types";
import {DesktopWrap, ImgStyle, SmallWrap} from './styled'
import Loadable from 'react-loadable';
import Placeholder from '../../../generic/loading/placeholder'
import { Image } from "styled-icons/boxicons-regular/Image";

const DeskImage = Loadable({
  loader: () => import('./ImgStyle'),
  loading: () => <Placeholder width={'330px'} height={'220px'}/>,
});
const DesktopImg = ({ gallery, onOpenModalMulti }) => {
  const galleryLength = gallery[0].items.length
  let defaultImg = [];
  let check = galleryLength - 4;
      if (check < 0){
        let value = Math.abs(check)
        for(let i = 0; i < value; i++) defaultImg.push(i)
      }
  return (
    <DesktopWrap length={galleryLength}>
      {gallery[0].items.map((item, index) => (
        <DeskImage 
          index={index}
          item={item}
          onOpenModalMulti={onOpenModalMulti}
          gallery={gallery}
          key={index}
        />
      ))}
      {defaultImg.length > 0 && defaultImg.map(el => (<Image
        size="200"
        color="white"
        style={{ margin: "auto auto 0.5em auto", width: "335px", height:"220px", background: "#E9E9E9" }}
        key={el}
      />))}
    </DesktopWrap>
  );
};

DesktopImg.propTypes = {
  gallery: PropTypes.array,
  onOpenModalMulti: PropTypes.func
}

export default DesktopImg;
