import styled from "styled-components";
import { Delete } from "styled-icons/material/Delete";

export const DeleteIcon = styled(Delete)`
  position: absolute;
  bottom: 5px;
  right: 0;

  :hover {
    color: red;
  }
`;

export const ViewImgBtn = styled.button`
  background: darkred;
  color: white !important;
  margin: 0;
  :hover {
    background: darkred !important;
    border: 1px solid black;
  }
`;

export const ModalWrap = styled.section`
  padding: 1em 1em 3em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    width:312px;
    position:absolute;
    bottom:10px;
    margin:0;
  }

`;
