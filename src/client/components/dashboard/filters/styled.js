import styled from "styled-components";
import { Range } from 'rc-slider';

export const SidebarWrap = styled.section`
  @media (min-width: 767px) {
    width: 350px;
  }
`;

export const GuestCount = styled.span`
  padding: 0 0.5em 0 0.5em;
`;

export const FilterButton = styled.button`
  margin: 0.5em 0em 0.5em 0;
  padding: 0.2em;
  color:white;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  :hover {
    color: white;
  }

  :focus {
    outline: none;
  }
`;

export const PriceWrap = styled.section`
  margin-top: 1.5em;
`;

export const GuestWrap = styled.section`
  margin-top: 3em;
`;