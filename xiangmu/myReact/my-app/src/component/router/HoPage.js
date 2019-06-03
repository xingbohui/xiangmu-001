import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './tow/form'
export default class HoPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="header ">
                        <li><Link to="/form">11</Link></li>
                    </ul>
                    <div className="form">
                        <Route  path="/form" component={Form} />
                    </div>
                </div>
            </Router>
        )
    }
}