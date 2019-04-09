import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import routes from '../shared/routes'
import Layout from './components/layout'
import NoMatch from './pages/noMatch'
import { withRouter } from 'react-router-dom'
import {GlobalStyle} from './styled'
import {connect} from 'react-redux'
function App(props) {
  const [auth, setAuth] = useState(props.initUser && props.initUser.user);
  const [reduxUser, setUser] = useState(props.user);

  useEffect(() => {
     props.user ? setUser(props.user) : setUser(null)
  }, [props.user])
 
  return (
        <Layout user={auth ? auth : reduxUser ? reduxUser : null} setAuth={setAuth} >
        <GlobalStyle />
        <Switch location={props.location}>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} user={auth ? auth : reduxUser ? reduxUser : null} />
            )} />
          ))}
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>
        </Layout>
    
   
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(
  mapStateToProps
)(App))

//export default App;
