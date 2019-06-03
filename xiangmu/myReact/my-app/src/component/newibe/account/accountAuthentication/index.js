import React, { Component } from 'react'
// import cn from 'classnames'
import AuthenticationInfo from './MenuRightBlock/index'
import {
    gitMenu
} from '../../helper/accountData'
export default class Authentication extends Component {
    constructor (porps) {
        super(porps)
        this.state = {
            index: 0
        }
    }
    render () {
        let menu = gitMenu()
        return (
            <div className="ac-authentication">
                <div className="ac-auMenu">
                    {
                        menu.map((item, index) => {
                            return (
                                <p
                                    className={this.state.index === index ? 'ac-auMenu-active' : 'ac-auMenu-default'}
                                    key={index}
                                    onClick={() => this.setState({ index: index })}>
                                    <span>{item.list}</span>
                                    <span>{item.status}</span>
                                </p>
                            )
                        })
                    }
                </div>
                <AuthenticationInfo
                    index={this.state.index}
                />
            </div>
        )
    }
}
