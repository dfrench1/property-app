import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color:black;
    font-size: 16px
  }
  a {
    text-decoration:none;
    color:black;
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
    background: #AAE2FB;
    color: #2028c1;
    font-size: 14px;

  }

`