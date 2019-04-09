import React from "react";
import { DeleteIcon } from "./styled";
const ViewingOwner = ({ handleDeleteViewing, item, setRemove }) => (
  <React.Fragment>
    <span>You are the owner of this viewing</span>
    <DeleteIcon
      size="30"
      color="darkred"
      onClick={() => {
        handleDeleteViewing(item);
        setRemove(true);
      }}
    />
  </React.Fragment>
);

export default ViewingOwner;
