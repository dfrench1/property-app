import React from "react";
import { ViewImgBtn } from "./styled";

const ToggleImages = ({ setEditData, el, setImgModal,
  handleDeleteImages }) => (
    <section style={{textAlign:'center'}}>
      <ViewImgBtn
        id="delImg"
        onClick={() => {
          setEditData(el);
          setImgModal(true);
          handleDeleteImages(true)
        }}
      >
        View
      </ViewImgBtn>
    </section>
);

export default ToggleImages;
