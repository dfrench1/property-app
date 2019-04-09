import React from "react";
import PropertyForm from "./PropertyForm";
import Flash from "../../generic/flashMessages";

const AddProperty = ({
  showForm,
  handleAddProperty,
  setData,
  data,
  postcodes,
  setFlash,
  newModal,
  setNewModal,
  flash,
  added
}) => (
  <section style={{ textAlign: "center" }}>
    <div>Admin</div>
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <PropertyForm
        showForm={showForm}
        handleSubmit={handleAddProperty}
        setData={setData}
        data={data}
        postcodes={postcodes}
        setFlash={setFlash}
        newModal={newModal}
        setNewModal={setNewModal}
        flash={flash}
      />
      {added && <Flash message={added[0].message} />}
    </div>
  </section>
);

export default AddProperty;
