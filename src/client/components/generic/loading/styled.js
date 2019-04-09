import styled from 'styled-components';

export const LoadingContainer = styled.div`
   position: relative;
   width: 440px;
   height: 290px;
   border: grey solid 1px;

   @media (min-width: 767px) {
        width:340px;
        height:220px;
    }
`

export const PlaceholderStyle = styled.section`
width: ${props => props.width ? props.width : '340px'};
height: ${props => props.height ? props.height : '235px'};
margin:0.3em;
background: rgba(233,233,233,0.8);

`