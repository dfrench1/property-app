import styled from "styled-components";
import { Image } from "styled-icons/boxicons-regular/Image";

export const CardWrap = styled.section`
margin:auto;
  span,
  div {
    color: black;
  }
  margin: 1em 1em 1em 0;
  /* display: flex; */
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  @media (min-width: 767px) {
    display: inline-flex;
    width: 340px;
  }
`;
export const DefaultImage = styled(Image)`
  width: 340px;
  height: 220px; 
  background: #e9e9e9;
`;
