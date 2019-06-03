import React, { Component } from 'react'
import Button from '../publiceComponent/button'
import Ddd from '../updateDate/date'

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: { display: "none", color: "red" },
            update:false,
            actionTitle:false,
        };
    }
    showhide =()=> {
        this.setState({actionTitle:!this.state.actionTitle});
        if (this.state.style.display === "none") {
            this.setState({ style: { display: "block", } })
        } else {
            this.setState({ style: { display: "none", } })
        }
    }
    render() {
        return (
            <div>
                <li>
                    <Button click={this.showhide } title={this.state.actionTitle }/>
                </li>
                <li style={this.state.style}>
                    <Ddd/>
                </li>
            </div>
        )

    }
}
