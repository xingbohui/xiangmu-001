import React from 'react'
export default class Ddd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    render() {
        return  (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}