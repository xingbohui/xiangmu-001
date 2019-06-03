import React, { Component } from 'react'
export default class Wellcom extends Component {
  constructor (porps) {
    super(porps)
    this.state = {
      index: 0
    }
  }
  render () {
    return (
      <div className="ac-wellcom">
        <span>邢博辉，</span>
        <span>欢迎您</span>
        <span>退出登录</span>
      </div>
    )
  }
}
