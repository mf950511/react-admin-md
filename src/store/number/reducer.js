/*
 * @Author: your name
 * @Date: 2020-06-23 11:25:54
 * @LastEditTime: 2020-06-23 14:01:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-md\src\store\reducer.js
 */ 
import { INCREMENT, DECREMENT } from './types'
const initialState = 0
const numberReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state
  }
}
export default numberReducer