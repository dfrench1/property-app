import React, { useState, useEffect } from "react";
import Modal from "../../../generic/modal";
import { DeleteIcon, ModalWrap } from "./styled";
import Loadable from 'react-loadable';
import Placeholder from '../../../generic/loading/placeholder'
const ModalImg = Loadable({
  loader: () => import('./ModalImg'),
  loading: () => <Placeholder width={'200px'} height={'100px'}/>,
});

function DeleteImages({
  delImgModal,
  setImgModal,
  editData,
  handleSelectImage,
  handleDeleteImages
}) {
  const [selected, setSelected] = useState([])
  return (
      <Modal
        trigger={delImgModal}
        triggerFunc={setImgModal}
        clear={setSelected}
        content={
          <ModalWrap
          >
            {editData.images.map(el => {
              const checkSel = selected.find(item => item == el)
              return (
                <section 
                  style={{ margin: "0.5em", position: "relative" }}
                  key={el}
                >
                  <ModalImg el={el}/>
                  <DeleteIcon
                    size="30"
                    color={checkSel ? 'red' : 'darkred'}
                    onClick={() => {
                      if (checkSel){
                        let update = selected.filter(item => item !== el)
                        setSelected(update)
                        handleSelectImage(el);
                      } else {
                        setSelected([...selected, el])
                        handleSelectImage(el);
                      }
                    }}
                  />
                </section>
              );
            })}
            <button 
              id="submit"
              onClick={()=>{
                if(selected.length > 0) {
                  handleDeleteImages()
                  setSelected([])
                  setImgModal(false)
                }
              }}
            >save</button>
          </ModalWrap>
        }
      />
  );
}

export default DeleteImages;
