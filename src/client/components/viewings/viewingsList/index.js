import React, { useState } from "react";
import { CardStyle } from "../styled";
import BookViewing from "./bookViewing";
import ViewProp from "./viewProp";
import ViewingOwner from "./viewingOwner";
import { Done } from "styled-icons/material/Done";
import { modifyDate } from "../functions/ModifyDate";
function ViewingsList({ item, props, handleDeleteViewing }) {
  const [remove, setRemove] = useState(false);
  const [success, setSuccess] = useState(false);
  let date = modifyDate(item);

  return (
    <CardStyle className={remove && "remove"}>
      <tbody>
        <tr>
          <th>{item.title}</th>
        </tr>
        <tr>
          <td>
            {date.date}
            {" - "}
            {date.time}
          </td>
        </tr>
        <tr>
          <td>{item.description}</td>
        </tr>
        <tr>
          <td>
            <ViewProp item={item} />
            {item.creator !== props.user.id ? (
              <React.Fragment>
                <BookViewing
                  item={item}
                  props={props}
                  setSuccess={setSuccess}
                />
                {success && <Done size={20} color="green" />}
              </React.Fragment>
            ) : (
              <ViewingOwner
                handleDeleteViewing={handleDeleteViewing}
                item={item}
                setRemove={setRemove}
              />
            )}
          </td>
        </tr>
      </tbody>
    </CardStyle>
  );
}

export default ViewingsList;
