import styled from 'styled-components';

export const ContainerStyle = styled.section`
 color: rgb(147, 146, 146);
 padding:1em;
 font-family: sans-serif;
 font-size: 14px;
`

export const ContentWrap = styled.section`
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 767px) {
        margin-left:3em;
    }
    @media (min-width: 1000px) {
        display:inline-flex;
        flex-wrap:nowrap;
    }
`

export const SearchWrap = styled.section`
    width:100%;
    @media (min-width: 767px) {
        
    }

`

export const SideBarWrap = styled.aside`
    width:100%;
    margin-top: 1em;
    order: 2;
    span:first-of-type {
        left:3% !important;
    }
    @media (min-width: 767px) {
        width: 350px;
    }
    @media (min-width: 1000px) {
        margin-right:5em;

        span:first-of-type {
            left:3% !important;
        }
    }
    h4 {
     margin-bottom:0;
    }
`