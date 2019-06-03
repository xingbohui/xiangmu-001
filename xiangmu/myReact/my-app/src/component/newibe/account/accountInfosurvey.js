import React, { Component } from 'react'
export default class Infosurvey extends Component {
  render () {
    return (
      <div className="ac-infoSurvey">
        <h3>信息概览</h3>
        <div className="infoSurvey-con">
          <li className="infoSurvey-row">
            <div className="infoSurvey-col">
              <p>
                <span>用户名</span>
                <span>未认证</span>
              </p>
              <p>
                <span>UsernameXXXXXX</span>
              </p>
            </div>
            <div>
              <p>
                <span>手机号码</span>
              </p>
              <p>
                <span>1338542****</span>
              </p>
            </div>
            <div>
              <p>
                <span>身份证号</span>
              </p>
              <p>
                <span>51130419820102****</span>
              </p>
            </div>
          </li>
          <li className="infoSurvey-row">
            <div className="infoSurvey-col">
              <p>
                <span>常旅客卡号</span>
              </p>
              <p>
                <span>845186548645318949654</span>
              </p>
            </div>
            <div>
              <p>
                <span>电子邮箱</span>
                <span>未验证</span>
              </p>
              <p>
                <span>test****@gmail.com</span>
              </p>
            </div>
            <div>
              <p>
                <span>出生日期</span>
              </p>
              <p>
                <span>1980-01-02</span>
              </p>
            </div>
          </li>
        </div>
      </div>
    )
  }
}
