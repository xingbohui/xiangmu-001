import React, { Component } from 'react'
import TipsInfo from '../accountTipsInfo'
export default class MailboxManagement extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="ac-auMenuInfo">
        <h2>邮箱管理及验证</h2>
        <TipsInfo/>
        <input type="button" value="验证"/>
      </div>
    )
  }
}
