import React, { Component } from 'react'
export default class Button extends Component {
    render() {
        const style = {
            background: '#53bd26',
            borderRadius: '4px',
            color: '#fff',
            border: '1px solid #53bd24'
        }
        return (
            <div>
                <button style={style} onClick={this.props.click}>{this.props.title ? '关闭详情' :'添加详情'}</button>
            </div>
        )
    }
}
