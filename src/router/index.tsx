import * as React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from 'pages/login'
import Home from 'pages/home'
import { createHashHistory } from 'history'
const history = createHashHistory()
const RouteConfig = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/home" component={ Home }></Route>
        <Route path="/login" component={ Login }></Route>
        <Redirect to="/home" from="/"></Redirect>
      </Switch>
    </Router>
  )
}

export default RouteConfig

