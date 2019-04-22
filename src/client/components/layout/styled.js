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

export const FlashStyle = styled.section`
    background: darkred;
    color: white;
    max-width: 200px;
    text-align: center;
    border-radius: 5px;
    padding: 0.5em;
    position: absolute;
    top: 3.4em;
    left: 4em;
`