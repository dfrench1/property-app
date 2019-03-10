import styled from 'styled-components';

export const CardWrap = styled.section`
order: 3;
    @media (min-width: 767px) {
        /* margin: 0.5em 0 0 50px; */
        display: inline-flex;
        flex-wrap:wrap;
        justify-content: center;
    }
`

export const NoResults = styled.h3`
    margin: 1em 0 0 0;
`