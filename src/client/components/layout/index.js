import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav/index'
import {ContainerStyle, ContentWrap} from './styled'
import {connect} from 'react-redux'
import Property from '../property/home';
const Layout = ({user, children, reduxUser, setAuth}) => {
    return (
      <React.Fragment>
      <Nav user={user ? user : reduxUser } setAuth={setAuth} />
        <ContainerStyle>
          {children}
        </ContainerStyle>
      </React.Fragment>
    );
};

Layout.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
  reduxUser: PropTypes.object,
  setAuth: PropTypes.func
};

const mapStateToProps = (state) => ({
  reduxUser: state.user
})

export default (connect(
  mapStateToProps
)(Layout))

//export default Layout;