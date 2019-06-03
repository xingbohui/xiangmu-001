import React, { Component } from 'react'
import Authentication from './authentication'
import PersonalInfo from './personalInfo'
import ChangePass from './changePass'
import MailboxManagement from './mailboxManagement'
import MobliePhoneMangement from './mobliePhoneMangement'
import FrequentPassengerCare from './frequentPassengerCard'
import Safeguard from './safeguard'
export default class AuthenticationInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    // 此处添加key属性是因为无法提交，必须给array中一个key属性,另一种方法使用switch case语句也可以
    let arr = [
      <Authentication key={0}/>,
      <PersonalInfo key={1}/>,
      <ChangePass key={2}/>,
      <MailboxManagement key={3}/>,
      <MobliePhoneMangement key={4}/>,
      <FrequentPassengerCare key={5}/>,
      <Safeguard key={6}/>
    ]
    let { index } = this.props
    return (
      <div>
        {arr[index]}
      </div>
    )
  }
}
