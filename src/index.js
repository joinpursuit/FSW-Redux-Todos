import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import Store from './store'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

// const store = createStore(rootReducer)

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
