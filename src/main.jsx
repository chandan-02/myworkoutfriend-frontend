import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)
