import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import React from 'react'
import ProtectedRoute from './routes/ProtectedRoute'
import ForwardRoute from './routes/ForwardRoute'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Landing from './pages/Landing';
import Layout from './routes/containers/Layout'
import Auth from './routes/containers/Auth';

import './css/App.css'
function App() {

  return (
    <div>
      <ToastContainer />
      <Switch>
        <ForwardRoute path="/auth" component={Auth} />
        <ProtectedRoute path="/app" component={Layout} />
        <Route exact path="/" component={Landing} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  )
}

export default App
