import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import routes from '../shared/routes'
import Layout from './components/layout'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {verifyToken} from './functions/VerifyToken'
import {GlobalStyle} from './styled'
function App(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
      verifyToken(window, setUser)
  }, [])
  return (
    // <TransitionGroup component="main" className="fade">
    //  <CSSTransition
    //     key={currentKey}
    //     classNames="fade"
    //     timeout={{enter: 1000, exit:1000}}
    //     appear
    //   >
      <Layout user={user} {...props} >
      <GlobalStyle />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} user={user} render={(props) => (
              <Component {...props} {...rest} user={user} />
            )} />
          ))}
          {/* <Route render={(props) => <NoMatch {...props} /> } /> */}
        </Switch>
        {/* <Switch location={location}>
          <Route exact path="/" component={(props) => <Dashboard user={user} {...props} />} />
          <Route path="/property/:title" component={(props) => <Property user={user} {...props} />} />
          <Route path="/login" component={(props) => <Login user={user} {...props} />} />
          <Route path="/register" component={(props) => <Register user={user} {...props} />} />
        </Switch> */}
      </Layout>
    // </CSSTransition>
    // </TransitionGroup>
  )
}

export default App;
