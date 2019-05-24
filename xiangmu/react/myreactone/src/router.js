import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import { PageOne, PageTwo, PageThree} from './scene/index'
export default class Page extends Component {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/"/>页面一</li>
                        <li><Link to="/pageTwo"/>页面二</li>
                        <li><Link to="/pageThree"/>页面三</li>
                    </ul>
                    <Route exact path="/" component={PageOne}/>
                    <Route exact path="/pagetow" component={PageTwo}/>
                    <Route exact path="/pagethree" component={PageThree}/>

                </div>
            </Router>
        )
    }
}
