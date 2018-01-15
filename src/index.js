import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ConnectedRouter as Router } from 'react-router-redux'
import  { history } from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('root'))



registerServiceWorker();
