import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color:lightslategray;
    font-size: 16px;
    margin: 0 0 8px 0;
    line-height:1.5em;
  }
  a {
    text-decoration:none;
    color: darkred;
  }
  input, button {
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    padding:0.5em;
    background-color: white;
    line-height:1.5;
    margin:0.5em;
  }
  h4, h3 {
    font-weight:500;
  }
  input {
    font-size: 14px;
    :hover{
      border-color: #7aabdb;
    }
    :focus {
      outline:none !important;
      border-color: #7aabdb;
    }
  }
  button {
    background: darkred;
    color: white;
    font-size: 14px;
  }
  button:focus {
    outline:none;
  }
  button:hover{
    border:1px solid black;
  }

  select {
    padding:0.5em;
    min-width:316px;
  }

  .closeButtonModal {
    top: 1px;
    right: 1px;
  }
  .closeButtonModal:hover {
    border:none !important;
  }
  

`