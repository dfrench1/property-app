import styled from 'styled-components';

export const CardWrap = styled.section`
order: 3;
margin:auto;
    @media (min-width: 767px) {

        display: inline-flex;
        flex-wrap:wrap;
        justify-content: flex-start;
    }
`

export const NoResults = styled.h3`
    margin: 1em;
`