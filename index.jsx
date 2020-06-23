import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './src/app.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from '@/store/index'
const store = createStore(RootReducer)
console.log(333, 444)
ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  ,document.querySelector('#app')
)