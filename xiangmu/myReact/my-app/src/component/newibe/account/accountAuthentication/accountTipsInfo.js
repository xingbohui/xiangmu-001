import React, { Component } from 'react'
// import { Icon } from '@cqrd/air-ui'
export default class TipsInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    // TODO: switch case 语句循环不同的展示信息（依据this.props的值）
    return (
      <div className="ac-tipsInfo">
        {/*<Icon name={'tips'}/>*/}
        <span className="ac-tipsInfo-con">
          <span>您还未进行实名认证，认证银行卡，享受网站更优质服务。</span>
          <span>目前您的网站密码与常旅客密码不一致，请修改一致后，再进行认证，并请重新登陆。</span>
        </span>
      </div>
    )
  }
}
