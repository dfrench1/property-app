import React from "react";
import { FormStyle } from "../styled";
import Modal from "../../generic/modal";
import { FormModal } from "../styled";
import Flash from "../../generic/flashMessages";

const AddProperty = ({
  showForm,
  handleSubmit,
  setData,
  data,
  postcodes,
  setFlash,
  newModal,
  setNewModal,
  flash
}) => (
  <React.Fragment>
    <button
      onClick={() => {
        setNewModal(true);
      }}
    >
      {" "}
      Add New Property
    </button>
    {newModal && (
      <Modal
        trigger={newModal}
        triggerFunc={setNewModal}
        content={
          <FormStyle onSubmit={handleSubmit} style={{ paddingTop: "2em" }}>
            <input
              placeholder="title"
              onChange={e => {
                setData({ ...data, title: e.target.value });
              }}
            />
            <input
              placeholder="rooms"
              type="number"
              min="1"
              max="10"
              onChange={e => {
                setData({ ...data, rooms: e.target.value });
              }}
            />
            <input
              placeholder="guests"
              type="number"
              name="guests"
              min="1"
              max="30"
              onChange={e => {
                setData({ ...data, guests: e.target.value });
              }}
            />
            <input
              placeholder="price"
              type="number"
              name="price"
              min="1"
              max="500"
              step="0.01"
              onChange={e => {
                setData({ ...data, price: e.target.value });
              }}
            />
            <select
              onChange={e => {
                if (e.target.value !== "") {
                  const coords = e.target.value;
                  setData({ ...data, coords: coords });
                }
              }}
            >
              {" "}
              <React.Fragment>
                <option value="">
                  postcode
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
            {flash && <Flash message={flash[0].message} />}
          </FormStyle>
        }
      />
    )}
  </React.Fragment>
);

export default AddProperty;
