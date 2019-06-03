import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../resource/css/home/home.css';
import HoPage from './HoPage';
import Book from './Book';
import OrderDetails from '../orderDetails/index';
import CommentBox from '../comment/CommentBox';
import Slider from '../wheel/index';
import Register from '../login/register';
import Account from '../newibe/account/index';

export default class APP extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="header">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/book">机票预订</Link></li>
                        <li><Link to="/order">订单中心</Link></li>
                        <li><Link to="/comment">留言评论</Link></li>
                        <li><Link to="/slider">轮播</Link></li>
                        <li><Link to="/register">注册</Link></li>
                        <li><Link to="/account">个人账户</Link></li>
                    </ul>
                    <div className="conent">
                        {/* {this.props.children}  */}
                         {/* this.props.children是组件App的子节点 */}
                        <Route exact path="/" component={HoPage} />
                        <Route path="/book" component={Book} />
                        <Route path="/order" component={OrderDetails} />
                        <Route path="/comment" component={CommentBox} />
                        <Route path="/slider" component={Slider} />
                        <Route path="/register" component={Register} />
                        <Route path="/account" component={Account} />
                    </div>
                </div>
            </Router>
        )
    }
}


