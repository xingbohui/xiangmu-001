import React, {Component} from 'react'
import './style.css'
export default class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      anchorFlag:true
    }
    
  }
  liveAnchor () {
    if(this.state.anchorFlag){
      this.refs.anchorV.className='div-con anchor-disappear';
      this.setState({
        anchorFlag:false
      })
    }else{
      this.refs.anchorV.className = 'div-con anchor-arise';
      this.setState({
        anchorFlag:true
      })
    }
  }
  render () {
    return ( 
      <div  className="div">
        <div  ref='anchorV'>
          <div className="div1">1</div>
          <div className="div1">2</div>
          <div className="div1">3</div>
          <div className="div1">4</div>
        </div>
        <input type="button" value="点击滑动" onClick={this.liveAnchor.bind(this)}/>
      </div>
    )
  }
}

  