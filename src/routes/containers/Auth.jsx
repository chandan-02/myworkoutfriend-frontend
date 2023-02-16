import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../../pages/Login';
import Register from '../../pages/Register';
// import ForgotPassword from '../../pages/ForgotPassword'
// import ResetPassword from '../../hpages/ResetPassword'

function Auth() {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      {/* <Route exact path="/auth/forgot-password" component={ForgotPassword} /> */}
      {/* <Route exact path="/auth/reset-password" component={ResetPassword} /> */}
      <Redirect from="/auth" to="/auth/login" />
    </Switch>
  )
}

export default Auth
