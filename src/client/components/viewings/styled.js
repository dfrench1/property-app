import styled from 'styled-components';

export const CardWrap = styled.section`
display:flex;
flex-wrap:wrap;
justify-content:center;
`

export const CardStyle = styled.table`
width:100%;
max-width:340px;
border-radius:5px;
margin:1em;
  th,
  td {
    padding: 0.5em;
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
/* border-radius:5px;
margin:1em;
padding:1em;
width:100%;
max-width:300px;
position:relative;
color:white; */
button {
    background: white;
    color:black;
}
opacity:1;

`
