import styled, { css } from 'styled-components';

export const SmallWrap = styled.section`

@media (min-width: 767px) {
    display:inline-block;
    width:50%;
    img {
     width:100%;
    }
}
@media (min-width: 1100px) {

}

`

export const DesktopWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  max-width: 700px;

  @media (min-width: 767px) {
      margin: auto;
  }

  @media (min-width: 1100px) {
        display:inline-flex;
        flex-wrap: wrap;
  }
    
`;
export const ImgStyle = styled.img`
    width: ${props => props.index == 0 ? '100%' : '49%'};
    height: ${props => props.index == 0 ? '50%': '230px'};
    padding-bottom: ${props => props.index == 0 ? '0.5em' : '0'};

`