import styled from 'styled-components';

export const ContainerStyle = styled.section`
 color: rgb(147, 146, 146);
 padding: 1em 2em 2em 2em;
 font-family: sans-serif;
 font-size: 14px;
`

export const ContentWrap = styled.section`
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 767px) {
        display:inline-flex;
        flex-wrap:nowrap;
    }
`