import styled from "styled-components";
import {InfoCircle} from 'styled-icons/boxicons-regular/InfoCircle'

export const InfoIcon = styled(InfoCircle)`

`
export const InfoWrap = styled.span`
:hover {
  .tooltip {
    opacity:1
  }
}
`
export const Tooltip = styled.span`
    opacity:0;
    position:absolute;
    z-index:10;
    background:rgba(53,48,48,0.9);
    padding:0.3em;
    border-radius:5px;
    width:200px;
    top:-6em;
    :hover {
      opacity:0 !important;
    }
`
export const AdminWrap = styled.div`
  h4 {
    text-align: center;
  }
`;

export const FormStyle = styled.form`
  width: 100%;
  * {
    margin: auto;
  }
  select {
  }
  input,
  select {
    display: block;
    width: 300px;
  }
  button {
    width: 312px;
    display: block;
    margin-top: 2em;
  }
`;

export const FormModal = styled(FormStyle)`
  margin-top: 2em;
  * {
    margin: auto;
  }
  select {
    margin-left: auto !important;
  }
`;

export const TableStyle = styled.table`
  margin: auto;
  width:100%;
  text-align:center;
  th,
  td {
    padding: 8px;
    text-align:center;
  }
  th {
    color: white;
    background-color: lightslategray;
    font-weight: 500;
  }
  tr {
    background-color: #e9e9e9;
    color: midnightblue;
  }
  div {
    padding: 0.3em;
    margin-bottom: 0.5em;
    display: flex;
  }
  label {
    width: 120px;
    padding-top: 0.5em;
  }
  input {
    margin: 0;
  }

  button {
    color: black;
  }

  transition: all 2000ms;
  opacity: 1;
`;
