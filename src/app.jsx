import * as React from 'react'
import './app.less'
import ImgUrl from './image/img.png'


class App extends React.Component{
  render(){
    return (
      <div className="red">
        <div className="blue" onClick={ () => {console.log(444444)} }>1234123</div>
        <div className="orange">3456</div>
        <img src={ImgUrl}/>
      </div>
    )
  }
}

export default App