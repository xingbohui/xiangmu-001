import React, { Component } from 'react'
import TipsInfo from '../accountTipsInfo'
export default class PersonalInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="ac-auMenuInfo">
        <h2>个人信息设置</h2>
        <TipsInfo/>
        <input type="button" value="验证"/>
      </div>
    )
  }
}
