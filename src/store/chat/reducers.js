/*
 * @Author: your name
 * @Date: 2020-06-23 11:34:01
 * @LastEditTime: 2020-06-23 11:44:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-md\src\store\chat\reducers.js
 */ 
import { SEND, DELETE } from './types'

const initialState = []

const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND:
      return [...state, action.payload]
    case DELETE:
      return state.length ? state.slice(0, state.length - 1) : []
    default:
      return state
  }
}
export default chatReducer