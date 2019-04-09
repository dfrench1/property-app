import styled from 'styled-components';

export const ContainerStyle = styled.section`
 padding: 1em 0em 2em 0em;
 font-family: sans-serif;
 font-size: 14px;
 margin:1em;
`

export const ContentWrap = styled.section`
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 767px) {
        display:inline-flex;
        flex-wrap:nowrap;
    }
`