import React from 'react'
import * as ReactDOM from 'react-dom'
import App from './src/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from "./src/store/index"
import { history } from './src/lib/untils'
setTimeout(() =>{
  history.push('/home')
}, 2000)
const store = createStore(RootReducer)
console.log(333, 444)
ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  ,document.querySelector('#app')
)