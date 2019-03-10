import styled, { css } from 'styled-components';

export const IconWrap = styled.section`
  height: 100%;
  position: absolute;
  bottom: 0;
  top:35%;
  cursor: pointer;
  ${props =>
    props.left &&
    css`
      left: 0 !important;
    `};
  ${props =>
    !props.left &&
    css`
      right: 0 !important;
    `};
    @media (min-width: 767px) {
      top:40%;
    }

`;