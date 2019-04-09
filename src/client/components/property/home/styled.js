import styled from "styled-components";

export const PropertyWrap = styled.section`
  text-align: center;

  @media (min-width: 767px) {
    max-width: 700px;
    margin: auto;
  }

  @media (min-width: 1200px) {
    display: flex;
    margin: unset;
    max-width: unset;
  }
`;

export const InfoWrap = styled.section`
  display: block;

  @media (min-width: 1200px) {
    width: 100%;
    margin: 0 0.5em 0 0.5em;
  }
`;

export const PropertyInfo = styled.table`
  width: 100%;
  th,td{
    padding: 8px;
    text-align: left;
  }
  th {
    color:white;
    background-color: lightslategray;
    font-weight:500;
  }
  tr {
    background-color: #E9E9E9;
    color: midnightblue;
  }
`;
