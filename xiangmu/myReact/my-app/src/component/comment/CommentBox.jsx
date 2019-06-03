'user strict'; // this 从指向widows 变成指向undefined ,从而从新绑定上自己的数据

import React from 'react';
import CommentList from './CommentList'
import CommentFrom from './CommentForm'
import json from '../comments.json'
import '../../resource/css/comment/comment.css'
 
class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment">
                <h1>评论</h1>
                <hr />
                <div className="comList">
                    <CommentList data={json}/>
                    <CommentFrom />
                </div>
            </div>
        )
    }
}
export default CommentBox;