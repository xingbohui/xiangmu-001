import React, { Component } from 'react'
import './style.css'
export default class Register extends Component {
    render () {
        return (
            <div className="lg-register">
                <h2>用户注册</h2>
                <input id="lg-register-is" className="lg-register-radio" type="radio" name="Mes" value="ok"/>
                <label htmlFor="lg-register-is"><span className="span_1">我是常旅客会员</span></label>
                <input id="lg-register-no" className="lg-register-radio" type="radio" name="Mes" value="no"/>
                <label htmlFor="lg-register-no"><span>我不是常旅客会员</span></label>
            </div>
        )

    }
}
