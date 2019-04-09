import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { BackMethod } from './functions/BackMethod';
import { ForwardMethod } from './functions/ForwardMethod';
import Loadable from 'react-loadable';
import GalleryModal from './modal/index'
import Loading from '../../generic/loading/placeholder'
import DesktopImg from './desktop'

const MobileImg = Loadable({
  loader: () => import('./mobile'),
  loading: () => <Loading width={'400px'} height={'270px'}/>,
});

function Gallery (props) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState('');
  const [imgArray, setImgArray] = useState([]);
  const [desktop, setDesktop] = useState('');

  const windowGlobal = typeof window !== 'undefined' && window;
  useEffect(()=> {
    resize()
    windowGlobal.addEventListener('resize', resize);
    return function cleanup(){
      windowGlobal.removeEventListener('resize', resize);
    }
  })

  const resize = () => {
    if (windowGlobal.innerWidth > 767) {
      setDesktop(true)
    } else {
      setDesktop(false);
    }
  };

  const onOpenModal = img => {
    setModal(true);
    setImg(img)
  };

  const onOpenModalMulti = (img, imgArray) => {
    const images = imgArray.map((item, index) => ({
      id: index,
      url: item.gallery_image.url,
      ...item
    }));
    setModal(true);
    setImg(img);
    setImgArray(images)
  };

  const onCloseModal = () => {
    setModal(false);
  };

  const onBackBtn = (img, imgArray) => {
    const newImg = BackMethod(img, imgArray);
    setImg(newImg.url);
  };

  const onForwardBtn = (img, imgArray) => {
    const newImg = ForwardMethod(img, imgArray);
    setImg(newImg.url);
  };

    let modalSize, gallery;
    
    windowGlobal.innerWidth > 767 
    ? (modalSize = ['700px', '500px']) 
    : (modalSize = ['320px', '250px'])
    
    desktop
    ? gallery = 
    (<DesktopImg
      gallery={props.gallery}
      onOpenModalMulti={onOpenModalMulti}
     />)
    : gallery = 
    (<MobileImg
      gallery={props.gallery}
      onOpenModalMulti={onOpenModalMulti}
     />)

    return (
      props.gallery[0].items.length > 0 &&
      <React.Fragment>
        {gallery}
        <GalleryModal 
          open={modal}
          onCloseModal={onCloseModal}
          imgArray={imgArray}
          img={img}
          onBackBtn={onBackBtn}
          onForwardBtn={onForwardBtn}
        />
      </React.Fragment>
    );
 
}
export default Gallery

Gallery.propTypes = {
  gallery: PropTypes.array,
  title: PropTypes.object
}