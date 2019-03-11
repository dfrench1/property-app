import React from 'react';
import PropTypes from 'prop-types';
import {NavStyle} from './styled'
import HomeLink from './HomeLink'
import WelcomeUser from './WelcomeUser';
import LoginLink from './LoginLink'
const Nav = ({user}) => {
    return (
        <NavStyle>
          <HomeLink />
          { user 
          ? <WelcomeUser user={user} />
          : <LoginLink /> }
        </NavStyle>
    );
};

Nav.propTypes = {
    
};

export default Nav;