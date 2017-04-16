import React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {reducer as reduxFormReducer} from 'redux-form'
import App from './app'
import './index.css'

const reducers = {
  form: reduxFormReducer,
}

const reducer = combineReducers(reducers)

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
