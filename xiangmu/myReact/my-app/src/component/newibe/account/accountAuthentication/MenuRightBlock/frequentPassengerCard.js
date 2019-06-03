import React, { Component } from 'react'
import TipsInfo from '../accountTipsInfo'
export default class FrequentPassengerCare extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="ac-auMenuInfo">
        <h2>绑定常旅客卡号</h2>
        <TipsInfo/>
        <input type="button" value="验证"/>
      </div>
    )
  }
}
