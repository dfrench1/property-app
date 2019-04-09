import styled from "styled-components";

export const NavStyle = styled.nav`
  background: lightslategray;
  padding: 0.5em 1em 0.5em 1em;
  
  * {
    padding-right: 0.5em;
  }
  a {
    color: white;
    :hover{
      color:midnightblue;
    }
  }
  span {
    position: relative;
    top:2px;
  }
`;
