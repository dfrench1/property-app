import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import Flash from "../../generic/flashMessages";

function VideoModal({ trigger, triggerFunc, content, flash, clear }) {
  const [open, setOpen] = useState(trigger);
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        triggerFunc(false);
        clear && clear([])
      }}
      center
      styles={{
        modal: {
          padding: "0",
          width: "100%",
          minHeight: "300px",
          maxWidth: "500px",
          borderRadius: "5px"
        },
        overlay: { background: "rgba(0,0,0,0.5)" }
      }}
      classNames={{ closeButton: "closeButtonModal" }}
    >
      {content}
      {flash && <Flash message={flash[0].message} />}
    </Modal>
  );
}

export default VideoModal;
