import React from "react";
import {WelcomeStyle} from './styled'
const Welcome = (props) => (
    <WelcomeStyle>
      <i>{`Welcome ${props.user.name}`}</i>
    </WelcomeStyle>
);

export default Welcome;
