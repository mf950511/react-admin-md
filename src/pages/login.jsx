import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from '@/store/number/types'
const Login = (props) => {
  const { number, increment, decrement } = props
  console.log(123, number, increment, decrement)
  return (
    <div>
      <button>我是数字{ number }</button>
      <button onClick={() => { increment() } }>点我加10</button>
      <button onClick={() => { decrement() } }>点我减10</button>
    </div>
  )
}

function mapStateToProps(state){
  console.log(state)
  return {
    number: state.number 
  }
}

function mapDispatchToProps(dispatch){
  return {
    increment: () => dispatch({ type: INCREMENT, payload: 10 }),
    decrement: () => dispatch({ type: DECREMENT, payload: 10 })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)