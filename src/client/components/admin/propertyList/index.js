import React, { useState } from "react";
import PropTypes from "prop-types";
import { PropList } from "../styled";
import EditProperty from "./editProperty";
import DeleteImages from "./deleteImages/ImageModal";
import AddImages from "./addImages";
import ToggleImages from "./deleteImages";
import { DeleteIcon } from "./styled";
function PropertyList({
  el,
  handleDeleteProp,
  setModal,
  modal,
  editData,
  delImg,
  setEditData,
  handleEditSubmit,
  postcodes,
  setCurrentData,
  setImages,
  setImgModal,
  delImgModal,
  success,
  error,
  setImgIndex,
  imgIndex,
  newProp,
  handleSelectImage,
  handleDeleteImages
}) {
  const [remove, setRemove] = useState(false);
  return (
    <React.Fragment>
      <tr id="property" className={remove ? "remove" : undefined}>
        <td>
        {el.title}
        </td>
        <td>
        <EditProperty 
          el={el}
          setModal={setModal}
          modal={modal}
          editData={editData}
          setEditData={setEditData}
          handleEditSubmit={handleEditSubmit}
          postcodes={postcodes}
        />
        </td>
        <td>
        <AddImages
          setCurrentData={setCurrentData}
          setImages={setImages}
          setImgIndex={setImgIndex}
          success={success}
          error={error}
          imgIndex={imgIndex}
          el={el}
        />
        </td>
        <td>
        {el.images.length > 0 ? 
        <ToggleImages 
          setEditData={setEditData}
          el={el}
          setImgModal={setImgModal}
          handleSelectImage={handleSelectImage}
          handleDeleteImages={handleDeleteImages}
        /> : 'No images added yet...'
        }
        </td>
        <td style={{textAlign:'center'}}>
          <DeleteIcon
            size="30"
            color="darkred"
            onClick={() => {
              setRemove(true);
              handleDeleteProp(el);
            }}
          />
        </td>
        </tr>
        {delImgModal && editData._id == el._id &&
        <DeleteImages
          delImgModal={delImgModal}
          setImgModal={setImgModal}
          editData={editData}
          delImg={delImg}
          newProp={newProp}
          el={el}
          handleSelectImage={handleSelectImage}
          handleDeleteImages={handleDeleteImages}
        /> }
        </React.Fragment>
  );
}

PropertyList.propTypes = {};

export default PropertyList;
