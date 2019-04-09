import styled, { css } from 'styled-components';


export const MobileWrap = styled.section`
  img {
    width: 100%;
    height: 100%;
    max-height:473px;
    cursor: pointer;
  }
`;

export const ExtraImgStyle = styled.section`
  position: absolute;
  right: 3%;
  letter-spacing: 2px;
  bottom: 30px;
  cursor: pointer;
  color: white;
  z-index: 100;
  width: 32px;
  height: 30px;
  font-size: 18px;
  background: black;
  opacity: 0.9;
  border-radius: 5px;
  text-align: center;
  font-family: Raleway, 'sans-serif';
  @media screen and (device-aspect-ratio: 40/71) {
    bottom: 8%;
  }
`;
