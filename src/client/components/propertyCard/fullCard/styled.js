import styled from 'styled-components';

export const CardWrap = styled.section`
    span, div {
        color:black;
    }
    margin: 1em 1em 1em 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    @media (min-width: 767px) {
        display:inline-flex;
        width:340px;
    }
`