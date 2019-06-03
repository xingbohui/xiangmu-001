import React, { Component } from 'react'
// import { Icon } from '@cqrd/air-ui'
// import cn from 'classnames'
import {
  gitTitle
} from '../helper/accountData'
export default class TitleTab extends Component {
  constructor (porps) {
    super(porps)
    this.state = {
      index: 0
    }
  }
  render () {
    let title = gitTitle()
    return (
      <div className="ac-myAccount">
        <h2>我的账户</h2>
        {title.map((item, index) => {
          return (
            <li
              className={['ac-accountInfo', this.state.index === index ? 'ac-accountInfo-red' : null].join(' ')}
              onClick={ () => this.setState({ index: index })}
              key={index}>
              <span className="ac-account-con">
                {/*<Icon name={item.personal}/>*/}
                <br/>
                <span>{item.accTitle}</span>
              </span>
            </li>
          )
        })}
      </div>
    )
  }
}
