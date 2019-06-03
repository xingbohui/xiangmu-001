import React, { Component } from 'react'
import TitleTab from './accountTitleTab'
import Wellcome from './accountWellcome'
import Infosurvey from './accountInfosurvey'
import Authentication from './accountAuthentication/index'
import './style.less'
export default class Account extends Component {
  constructor (porps) {
    super(porps)
    this.state = {
      index: 0
    }
  }
  render () {
    return (
      <div className="account">
        <TitleTab/>
        <Wellcome/>
        <Infosurvey/>
        <hr/>
        <Authentication/>
      </div>
    )
  }
}
