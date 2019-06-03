import React, { Component } from 'react'
import TipsInfo from '../accountTipsInfo'
export default class Safeguard extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="ac-auMenuInfo">
        <h2>安全保护问题</h2>
        <TipsInfo/>
        <input type="button" value="验证"/>
      </div>
    )
  }
}
