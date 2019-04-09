import styled from 'styled-components'
import { Range } from 'rc-slider';

export const PriceWrap = styled.section`
  margin-top: 1.5em;
`;

export const RangeStyle = styled(Range)`
.rc-slider-handle.rc-slider-handle-1{
  border: solid 2px darkred !important;
}
.rc-slider-handle.rc-slider-handle-2{
  border: solid 2px darkred !important;
}
.rc-slider-mark-text{
  left:97% !important;
}
.rc-slider-step{
  width:97% !important;
}
.rc-slider-rail{
  width:99% !important;
}

`