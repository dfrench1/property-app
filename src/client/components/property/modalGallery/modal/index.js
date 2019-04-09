import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { ModalImageStyle, ModalWrap, CloseIcon } from './styled';
import ArrowIcon from '../icons/Arrow';
const GalleryModal = ({open, onCloseModal, imgArray, img, onBackBtn, onForwardBtn}) => {
    return (
      <Modal
        open={open}
        onClose={onCloseModal}
        center={true}
        showCloseIcon={false}
        closeIconSize={20}
        styles={{modal: {padding:'0.3em'}}}
      >
        <ModalWrap>
          {imgArray.length > 1 &&
            <ArrowIcon 
              img={img}
              imgArray={imgArray}
              BtnMethod={onBackBtn}
              left={true}
            />}
          <ModalImageStyle
            src={img}
            width={'100%'}
            height={'100%'}
            style={{ maxWidth: '846px', maxHeight: '564px' }}
          />
          {imgArray.length > 1 &&
            <ArrowIcon
              img={img}
              imgArray={imgArray}
              BtnMethod={onForwardBtn}
              left={false}
            />}
          <CloseIcon
            onClick={onCloseModal}
          />
        </ModalWrap>
      </Modal>
    );
};

GalleryModal.propTypes = {
    img: PropTypes.string,
    imgArray: PropTypes.array,
    onBackBtn: PropTypes.func,
    onCloseModal: PropTypes.func,
    onForwardBtn: PropTypes.func,
    open: PropTypes.bool,
};

export default GalleryModal;