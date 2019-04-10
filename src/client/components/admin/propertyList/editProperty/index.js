import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../generic/modal";
import { FormModal } from "../../styled";
import { EditIcon } from "./styled";

const EditProperty = ({
  el,
  setModal,
  modal,
  editData,
  setEditData,
  handleEditSubmit,
  postcodes
}) => {
  return (
    <React.Fragment>
      <section style={{textAlign:'center'}}>
        <EditIcon
          id="edit"
          size="30"
          onClick={() => {
            setEditData(el);
            setModal(true);
          }}
          color="darkred"
        />
      </section>
      {modal && editData._id == el._id && (
        <Modal
          trigger={modal}
          triggerFunc={setModal}
          content={
            <FormModal onSubmit={handleEditSubmit}>
              <input
                placeholder="title"
                value={editData.title}
                onChange={e => {
                  setEditData({ ...editData, title: e.target.value });
                }}
              />
              <input
                value={editData.rooms}
                placeholder="rooms"
                onChange={e => {
                  setEditData({ ...editData, rooms: e.target.value });
                }}
              />
              <input
                value={editData.guests}
                placeholder="guests"
                type="number"
                name="guests"
                min="1"
                max="30"
                onChange={e => {
                  setEditData({ ...editData, guests: e.target.value });
                }}
              />
              <input
                value={editData.price}
                placeholder="price"
                type="number"
                name="price"
                min="1"
                max="500"
                step="0.01"
                onChange={e => {
                  setEditData({ ...editData, price: e.target.value });
                }}
              />
              <select
                onChange={e => {
                  if (e.target.value !== "") {
                    const coords = e.target.value;
                    setEditData({ ...editData, coords: coords });
                  }
                }}
              >
                {" "}
                <React.Fragment>
                  <option value="">
                    select
                  </option>
                  {postcodes.map(el => (
                    <option 
                     value={el}
                     key={el}
                    >{el}</option>
                  ))}
                </React.Fragment>
              </select>

              <button id="submit">save</button>
            </FormModal>
          }
        />
      )}
    </React.Fragment>
  );
};

EditProperty.propTypes = {};

export default EditProperty;
