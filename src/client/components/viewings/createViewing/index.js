import React from "react";
import ViewingForm from './ViewingForm'
import Modal from "../../generic/modal";

const CreateViewing = ({setModal, modal, data, setData, props, handleCreateViewing, reduxUser, flash, setFlash}) => (
  <React.Fragment>
    <button
      style={{ margin: "0 0 1em 0" }}
      onClick={() => {
        setModal(true);
      }}
    >
      Create Viewing
    </button>
    {modal && (
      <Modal
        trigger={modal}
        triggerFunc={setModal}
        content={
          <ViewingForm
            handleCreateViewing={handleCreateViewing}
            data={data}
            setData={setData}
            props={props}
            reduxUser={reduxUser}
            setFlash={setFlash}
          />
        }
        flash={flash}
      />
    )}
  </React.Fragment>
);

export default CreateViewing