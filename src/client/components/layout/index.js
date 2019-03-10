import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav/index'
import {ContainerStyle, ContentWrap} from './styled'
const Layout = ({user, children}) => {
    return (
      <React.Fragment>
      <Nav user={user}/>
        <ContainerStyle>
          {children}
        </ContainerStyle>
      </React.Fragment>
    );
};

Layout.propTypes = {
    
};

export default Layout;