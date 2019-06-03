import React, { Component } from 'react'
import TipsInfo from '../accountTipsInfo'
export default class ChangePass extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="ac-auMenuInfo">
        <h2>修改登录密码</h2>
        <TipsInfo/>
        <input type="button" value="验证"/>
      </div>
    )
  }
}
