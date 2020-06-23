/*
 * @Author: your name
 * @Date: 2020-06-23 11:37:41
 * @LastEditTime: 2020-06-23 11:43:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-md\src\store\index.js
 */ 
import { combineReducers } from 'redux'
import ChatReducer from './chat/reducers'
import NumberReducer from './number/reducer'

const rootReducer = combineReducers({
  number: NumberReducer,
  chat: ChatReducer
})

export default rootReducer
