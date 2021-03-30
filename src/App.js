import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function App() {
  const { user } = useAuthListener()
  console.log(user)

  return (
    <Router>
      <Switch>
        {/* <Route exact path={ROUTES.SIGN_UP}> */}
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />

        </IsUserRedirect>
        {/* </Route> */}
        {/* <Route exact path={ROUTES.SIGN_IN}> */}
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        {/* </Route> */}
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}