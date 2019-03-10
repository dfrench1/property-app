import styled, { css } from 'styled-components';
import {Close} from 'styled-icons/material/Close'

export const CloseIcon = styled(Close)`
z-index:20;
position:absolute;
top:10px;
right:10px;
width:20px;
color:white;
`
export const ModalWrap = styled.div`
   min-width:250px;
   height: 240px;
   cursor: pointer;
  @media (min-width: 567px) {
    height:400px;
  }
  @media (min-width: 767px) {
    height:500px;
  }
`
export const ModalImageStyle = styled.img`
  cursor:pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

`