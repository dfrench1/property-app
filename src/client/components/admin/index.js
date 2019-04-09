import React, { useState, useEffect } from "react";
import { TableStyle, AdminWrap, InfoIcon, InfoWrap, Tooltip } from "./styled";
import AddProperty from "./addProperty";
import PropertyList from "./propertyList";
import { addProperty } from "./functions/AddProperty";
import { editProperty } from "./functions/EditProperty";
import { deleteProperty } from "./functions/DeleteProperty";
import { uploadImage } from "./functions/UploadImages";
import { deleteImage } from "./functions/DeleteImage";
import { updateProps } from "./functions/UpdateProps";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions";

function Admin(props) {
  const [form, showForm] = useState(false);
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [newImg, setNewImg] = useState(null);
  const [delImg, delNewImg] = useState(null);
  const [imgIndex, setImgIndex] = useState(null);
  const [newProp, setNewProp] = useState(null);
  const [modal, setModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [delImgModal, setImgModal] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [flash, setFlash] = useState(null);
  const [added, setAdded] = useState(null);
  const [selected, setDeleteImg] = useState([]);
  const postcodes = ["N1","NW1","N5","E1","E2","E8","SE1","SE16","SW8","W1","W2","W9"];

  useEffect(() => {
    if (images) {
      imageUpload();
    }
  }, [images, props.user, props.reduxUser, selected]);

  const checkUser = () => (props.reduxUser ? props.reduxUser : props.user);
  const clearProps = () => {
    delNewImg(null);
    setNewImg(null);
  };

  const handleAddProperty = e => {
    clearProps();
    addProperty(
      e,
      data,
      props,
      setNewProp,
      props.setUser,
      setFlash,
      setNewModal,
      setAdded
    );
  };

  const handleEditSubmit = e => {
    clearProps();
    editProperty(e, editData, props, setNewProp, props.setUser);
    setModal(false);
  };

  const handleDeleteProp = el => {
    clearProps();
    deleteProperty(el, props, setNewProp, props.setUser);
  };

  const imageUpload = () => {
    delNewImg(null);
    uploadImage(images, currentData, setSuccess, setError, setNewImg, props);
    setImages(null);
  };

  const handleSelectImage = el => {
    let check = selected.find(item => item == el);
    if (check) {
      let update = selected.filter(item => item !== el);
      setDeleteImg(update);
    } else {
      setDeleteImg([...selected, el]);
    }
  };
  const handleDeleteImages = clear => {
    if (clear) {
      setDeleteImg([]);
      return;
    }
    let uniqueImages = new Set(selected);
    setNewImg(null);
    deleteImage(uniqueImages, editData, props, delNewImg);
  };

  const currentProperties = () => {
    return updateProps(newImg, delImg, checkUser);
  };

  return checkUser() ? (
    <AdminWrap>
      <AddProperty
        showForm={showForm}
        handleAddProperty={handleAddProperty}
        setData={setData}
        data={data}
        postcodes={postcodes}
        setFlash={setFlash}
        newModal={newModal}
        setNewModal={setNewModal}
        flash={flash}
        added={added}
      />

      <h4>Your current properties</h4>
      <div style={{overflowX:'auto'}}>
      <TableStyle>
      <tbody>
      <tr>
        <th>Title</th>
        <th>Edit</th>
        <th style={{position:'relative'}}>
          Add Images
          <InfoWrap>
            <InfoIcon 
              size="23" 
              color="darkred"    
            />
            <Tooltip className="tooltip">Type - <i>jpg, jpeg, gif, or png.</i> <br /> Recommended: <br /> Aspect Ratio - <i>3:2</i></Tooltip>
          </InfoWrap>
        </th>
        <th>Delete Images</th>
        <th>Delete Property</th>
      </tr>
        {currentProperties().map(el => {
          return (
            <PropertyList
              el={el}
              key={el._id}
              handleDeleteProp={handleDeleteProp}
              setModal={setModal}
              modal={modal}
              editData={editData}
              delImg={delImg}
              setEditData={setEditData}
              handleEditSubmit={handleEditSubmit}
              postcodes={postcodes}
              setCurrentData={setCurrentData}
              setImages={setImages}
              setImgIndex={setImgIndex}
              setImgModal={setImgModal}
              delImgModal={delImgModal}
              error={error}
              success={success}
              setImgIndex={setImgIndex}
              imgIndex={imgIndex}
              newProp={newProp}
              handleSelectImage={handleSelectImage}
              handleDeleteImages={handleDeleteImages}
            />
          );
        })}
        </tbody>
      </TableStyle>
      </div>
    </AdminWrap>
  ) : (
    <div>Loading...</div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  };
};
const mapStateToProps = state => ({
  reduxUser: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
