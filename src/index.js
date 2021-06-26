import React from 'react'
import { render } from 'react-dom'
import App from './App'
import "./index.css"
import { StateProvider } from './services/StateProvider'
import reducer, { initialState } from './services/reducer'

render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,

  document.getElementById('root')
)
