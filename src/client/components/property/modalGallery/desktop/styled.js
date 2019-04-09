import styled, { css } from 'styled-components';

export const DesktopWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  max-width: 700px;

  @media (min-width: 767px) {
      margin: auto;
      margin-top:initial;
  }

  @media (min-width: 1000px) {
        display:inline-flex;
        flex-wrap: wrap;
        width:100%;
  }
    
`;
export const ImgStyle = styled.img`
    width: 335px;
    height: 220px;
    margin: auto auto 0.5em auto;
`